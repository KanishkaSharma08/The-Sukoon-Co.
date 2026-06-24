/**
 * A lightweight, self-contained Markdown-to-HTML parser.
 * Supports headers (#, ##, ###), bold, italics, bullet lists, ordered lists,
 * horizontal rules, links, and paragraphs.
 * Zero external dependencies.
 */
export function parseMarkdown(md: string): string {
  // Normalize line endings
  const rawLines = md.replace(/\r\n/g, '\n');

  // Split into blocks by double newlines
  const blocks = rawLines.split(/\n\s*\n/);

  const parsedBlocks = blocks.map((block) => {
    let trimmed = block.trim();
    if (!trimmed) return '';

    // Headers
    if (trimmed.startsWith('# ')) {
      return `<h1>${parseInline(trimmed.substring(2))}</h1>`;
    }
    if (trimmed.startsWith('## ')) {
      return `<h2>${parseInline(trimmed.substring(3))}</h2>`;
    }
    if (trimmed.startsWith('### ')) {
      return `<h3>${parseInline(trimmed.substring(4))}</h3>`;
    }

    // Horizontal Rule
    if (trimmed === '---') {
      return '<hr />';
    }

    // Unordered Lists (- or * prefix)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items = trimmed.split('\n').map((line) => {
        const content = line.replace(/^[\s\-\*]+\s*/, '');
        return `<li>${parseInline(content)}</li>`;
      });
      return `<ul>${items.join('')}</ul>`;
    }

    // Ordered Lists (1. prefix)
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split('\n').map((line) => {
        const content = line.replace(/^\d+\.\s*/, '');
        return `<li>${parseInline(content)}</li>`;
      });
      return `<ol>${items.join('')}</ol>`;
    }

    // Standard Paragraph
    return `<p>${parseInline(trimmed)}</p>`;
  });

  return parsedBlocks.filter(Boolean).join('\n');
}

function parseInline(text: string): string {
  let html = text;

  // Escape basic HTML characters to prevent XSS
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Bold (**text** or __text__)
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

  // Italics (*text* or _text_) — only single * not followed by *
  html = html.replace(/\*(?!\*)(.*?)(?<!\*)\*/g, '<em>$1</em>');
  html = html.replace(/(?<!_)_(?!_)(.*?)(?<!_)_(?!_)/g, '<em>$1</em>');

  // Links ([text](url))
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  return html;
}
