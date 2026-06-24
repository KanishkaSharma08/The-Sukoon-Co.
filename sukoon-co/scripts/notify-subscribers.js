import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load settings from environment variables
const apiKey = process.env.BREVO_API_KEY;
const listId = parseInt(process.env.BREVO_LIST_ID || '3', 10);
const siteUrl = (process.env.SITE_URL || 'https://thesukoonco.in').replace(/\/$/, '');
const senderEmail = process.env.BREVO_SENDER_EMAIL || 'team@sukoonco.com';
const senderName = process.env.BREVO_SENDER_NAME || 'The Sukoon Co.';
const isDryRun = process.env.DRY_RUN === 'true' || process.argv.includes('--dry-run');

console.log('--- Sukoon Newsletter Automation Start ---');
console.log(`Site URL: ${siteUrl}`);
console.log(`Sender: ${senderName} <${senderEmail}>`);
console.log(`Target List ID: ${listId}`);
if (isDryRun) {
  console.log('Mode: DRY RUN (No emails will actually be sent)');
}

if (!apiKey && !isDryRun) {
  console.error('CRITICAL ERROR: BREVO_API_KEY is not defined. Set BREVO_API_KEY environment variable.');
  process.exit(1);
}

// 1. Parse stories from src/data/stories.ts
function extractStories() {
  const storiesPath = path.join(__dirname, '../src/data/stories.ts');
  if (!fs.existsSync(storiesPath)) {
    console.error(`Stories file not found at: ${storiesPath}`);
    process.exit(1);
  }
  
  const content = fs.readFileSync(storiesPath, 'utf8');
  
  // Clean up content: strip single line and multi-line comments
  const cleanContent = content
    .replace(/(^|[^:])\/\/.*$/gm, '$1')
    .replace(/\/\*[\s\S]*?\*\//g, '');

  const storyList = [];
  let openBraces = 0;
  let currentBlock = '';
  let inString = false;
  let stringChar = '';
  
  for (let i = 0; i < cleanContent.length; i++) {
    const char = cleanContent[i];
    
    // Handle string literals so brace matching ignores contents inside quotes
    if ((char === "'" || char === '"' || char === '`') && cleanContent[i-1] !== '\\') {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (stringChar === char) {
        inString = false;
      }
    }
    
    if (!inString) {
      if (char === '{') {
        openBraces++;
        if (openBraces === 1) {
          currentBlock = '{';
          continue;
        }
      } else if (char === '}') {
        openBraces--;
        if (openBraces === 0) {
          currentBlock += '}';
          // Check if this block defines a story object
          if (currentBlock.includes('id:')) {
            const parsedStory = parseStoryBlock(currentBlock);
            if (parsedStory) {
              storyList.push(parsedStory);
            }
          }
          currentBlock = '';
          continue;
        }
      }
    }
    
    if (openBraces > 0) {
      currentBlock += char;
    }
  }
  
  return storyList;
}

function parseStoryBlock(block) {
  const getField = (fieldName) => {
    // Matches fieldName: 'value' or fieldName: "value" or fieldName: `value`
    const regex = new RegExp(`${fieldName}\\s*:\\s*(['"\`])([\\s\\S]*?)\\1`);
    const match = block.match(regex);
    return match ? match[2].trim() : null;
  };

  const id = getField('id');
  const tag = getField('tag');
  const date = getField('date');
  const title = getField('title');
  const excerpt = getField('excerpt');
  const imgSrc = getField('imgSrc');
  const readTime = getField('readTime');

  if (!id || !title) return null;

  return { id, tag, date, title, excerpt, imgSrc, readTime };
}

// 2. Fetch existing campaigns from Brevo to check what's already been sent
async function getSentStoryIds() {
  if (isDryRun) {
    console.log('[Dry Run] Emulating fetch of existing campaigns (assuming none are sent)');
    return [];
  }

  const url = 'https://api.brevo.com/v3/emailCampaigns?type=classic&limit=50&status=sent,queued,draft';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
    }
  });
  
  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Failed to fetch email campaigns from Brevo (${response.status}): ${errorBody}`);
  }
  
  const data = await response.json();
  const campaigns = data.campaigns || [];
  const sentStoryIds = [];
  
  campaigns.forEach(c => {
    // Match pattern used in campaign name: "[Sukoon Blog] ID: <id>"
    const match = c.name.match(/\[Sukoon Blog\] ID:\s*([a-zA-Z0-9_-]+)/);
    if (match) {
      sentStoryIds.push(match[1]);
    }
  });
  
  return sentStoryIds;
}

// 3. Generate HTML email template
function generateEmailHtml(story) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Field Notes Dispatch</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #fcfbfa;
      color: #1a1a1a;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #fcfbfa;
      padding: 40px 20px;
      box-sizing: border-box;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #eae6e0;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
    }
    .header {
      padding: 30px 40px;
      text-align: center;
      border-bottom: 1px solid #f2eee9;
    }
    .logo {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 0.15em;
      color: #1a1a1a;
      text-transform: uppercase;
      text-decoration: none;
      display: inline-block;
    }
    .tagline {
      font-size: 11px;
      color: #c4a882;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-top: 5px;
      font-weight: 600;
    }
    .hero-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      display: block;
    }
    .content {
      padding: 40px;
    }
    .meta {
      margin-bottom: 20px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .tag {
      color: #c4a882;
      border: 1px solid rgba(196, 168, 130, 0.4);
      padding: 4px 10px;
      display: inline-block;
    }
    .date {
      color: #888888;
      margin-left: 10px;
      display: inline-block;
    }
    .title {
      font-size: 26px;
      font-weight: 800;
      line-height: 1.2;
      margin: 0 0 20px 0;
      color: #1a1a1a;
      letter-spacing: -0.02em;
    }
    .excerpt {
      font-size: 15px;
      line-height: 1.8;
      color: #555555;
      margin-bottom: 30px;
      border-left: 3px solid #c4a882;
      padding-left: 18px;
      font-style: italic;
    }
    .btn-container {
      text-align: center;
      margin-top: 30px;
      margin-bottom: 10px;
    }
    .btn {
      background-color: #1a1a1a;
      color: #ffffff !important;
      text-decoration: none;
      padding: 14px 30px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      display: inline-block;
      border-radius: 2px;
    }
    .footer {
      background-color: #f7f5f2;
      padding: 30px 40px;
      text-align: center;
      font-size: 12px;
      color: #888888;
      border-top: 1px solid #f2eee9;
    }
    .footer-brand {
      font-weight: 700;
      color: #555555;
      margin-bottom: 5px;
    }
    .footer-text {
      line-height: 1.6;
      margin-bottom: 15px;
    }
    .unsubscribe-link {
      color: #888888;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <a href="${siteUrl}" class="logo">The Sukoon Co.</a>
        <div class="tagline">Field Notes</div>
      </div>
      
      <img src="${story.imgSrc}" alt="${story.title}" class="hero-image">
      
      <div class="content">
        <div class="meta">
          <span class="tag">${story.tag}</span>
          <span class="date">${story.date}</span>
        </div>
        <h1 class="title">${story.title}</h1>
        <div class="excerpt">
          ${story.excerpt}
        </div>
        
        <div class="btn-container">
          <a href="${siteUrl}/blogs/${story.id}" class="btn">Read the Full Dispatch</a>
        </div>
      </div>
      
      <div class="footer">
        <div class="footer-brand">The Sukoon Co.</div>
        <div class="footer-text">Boutique customised travel across India.<br>Come back quieter.</div>
        <div>
          <a href="{{{ unsubscribe }}}" class="unsubscribe-link">Unsubscribe</a> from this list.
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

// 4. Create and trigger a Brevo campaign
async function sendCampaign(story) {
  const htmlContent = generateEmailHtml(story);
  const campaignName = `[Sukoon Blog] ID: ${story.id} - ${story.title.substring(0, 40)}`;
  const subject = `Field Notes: ${story.title}`;

  if (isDryRun) {
    console.log(`[Dry Run] Would create campaign: "${campaignName}"`);
    console.log(`[Dry Run] Subject: "${subject}"`);
    const testOutputPath = path.join(__dirname, `../dist/preview-${story.id}.html`);
    // Ensure dist directory exists for test previews
    if (!fs.existsSync(path.dirname(testOutputPath))) {
      fs.mkdirSync(path.dirname(testOutputPath), { recursive: true });
    }
    fs.writeFileSync(testOutputPath, htmlContent, 'utf8');
    console.log(`[Dry Run] Wrote preview HTML template to: ${testOutputPath}`);
    return;
  }

  // Create Campaign
  console.log(`Creating campaign on Brevo for "${story.title}"...`);
  const createUrl = 'https://api.brevo.com/v3/emailCampaigns';
  const createResponse = await fetch(createUrl, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      name: campaignName,
      subject: subject,
      sender: { name: senderName, email: senderEmail },
      recipients: { listIds: [listId] },
      htmlContent: htmlContent,
      type: 'classic',
    }),
  });

  const createData = await createResponse.json();

  if (!createResponse.ok) {
    throw new Error(`Failed to create campaign (${createResponse.status}): ${JSON.stringify(createData)}`);
  }

  const campaignId = createData.id;
  console.log(`Campaign created successfully! Campaign ID: ${campaignId}`);

  // Send Campaign Now
  console.log(`Sending campaign ID ${campaignId} immediately to List ID ${listId}...`);
  const sendUrl = `https://api.brevo.com/v3/emailCampaigns/${campaignId}/sendNow`;
  const sendResponse = await fetch(sendUrl, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
    },
  });

  if (!sendResponse.ok) {
    const sendError = await sendResponse.text();
    throw new Error(`Failed to send campaign (${sendResponse.status}): ${sendError}`);
  }

  console.log(`Campaign ID ${campaignId} has been successfully sent!`);
}

// Main execution flow
async function main() {
  try {
    const allStories = extractStories();
    console.log(`Found ${allStories.length} stories in stories.ts:`);
    allStories.forEach(s => console.log(`  - [${s.id}] ${s.title}`));

    if (allStories.length === 0) {
      console.log('No stories found to process.');
      return;
    }

    const sentStoryIds = await getSentStoryIds();
    console.log(`Found ${sentStoryIds.length} already sent blogs in recent campaigns:`, sentStoryIds);

    // Identify unsent stories
    const unsentStories = allStories.filter(story => !sentStoryIds.includes(story.id));

    if (unsentStories.length === 0) {
      console.log('All stories have already been sent to subscribers. No actions needed.');
      return;
    }

    console.log(`Found ${unsentStories.length} unsent stories. Processing...`);

    // Loop and send campaign for each unsent story
    for (const story of unsentStories) {
      console.log(`\n>>> Processing unsent story: [${story.id}] "${story.title}"`);
      await sendCampaign(story);
    }

    console.log('\n--- Sukoon Newsletter Automation Complete ---');
  } catch (error) {
    console.error('\nAutomation Script Failed:', error);
    process.exit(1);
  }
}

main();
