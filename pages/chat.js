import { useState } from 'react';

export default function Chat() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Real Estate Listing Writer</h1>
      <div style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            padding: '0.5rem',
            width: '70%',
            marginRight: '1rem'
          }}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
      <div style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <strong>Response:</strong> {response || 'Type a message to begin...'}
      </div>
    </div>
  );
}
