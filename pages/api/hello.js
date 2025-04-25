export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;
      return res.status(200).json({
        message: `Received your message: ${message}`
      });
    } catch (error) {
      return res.status(500).json({ error: 'Error processing your request' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
