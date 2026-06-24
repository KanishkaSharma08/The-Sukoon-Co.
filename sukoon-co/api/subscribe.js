export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = parseInt(process.env.BREVO_LIST_ID || '3', 10);

  if (!apiKey) {
    console.error('Missing BREVO_API_KEY environment variable');
    return res.status(500).json({ error: 'Newsletter service is not configured' });
  }

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: email.trim(),
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    // Check if response is JSON
    const contentType = brevoResponse.headers.get('content-type');
    let data = {};
    if (contentType && contentType.includes('application/json')) {
      data = await brevoResponse.json();
    }

    if (!brevoResponse.ok) {
      console.error('Brevo API returned error status:', brevoResponse.status, data);
      const errorMessage = data.message || 'Error subscribing to newsletter';
      return res.status(brevoResponse.status).json({ error: errorMessage });
    }

    return res.status(200).json({ success: true, message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Failed to subscribe:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
