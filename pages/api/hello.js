import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;
      
      // Create a thread
      const thread = await openai.beta.threads.create();
      
      // Add message to thread
      await openai.beta.threads.messages.create(thread.id, {
        role: "user",
        content: message,
      });
      
      // Run the assistant
      const run = await openai.beta.threads.runs.create(thread.id, {
        assistant_id: process.env.OPENAI_ASSISTANT_ID,
      });
      
      // Check the run status and get the response
      let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      
      // Poll until the run completes
      while (runStatus.status === 'in_progress' || runStatus.status === 'queued') {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      }
      
      // Get messages
      const messages = await openai.beta.threads.messages.list(thread.id);
      
      // Get the assistant's response
      const assistantResponse = messages.data[0].content[0].text.value;
      
      return res.status(200).json({
        message: assistantResponse
      });
      
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Error processing your request' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
