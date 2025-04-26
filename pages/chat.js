import { useState } from 'react';

export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsLoading(true);
    setInput('');

    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const assistantMessage = { role: 'assistant', content: data.message };
      setMessages(prevMessages => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: '#1a1f2d',
      minHeight: '100vh',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
    }}>
      <div className="container mx-auto max-w-4xl p-4">
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'white'
        }}>
          Listing Writer Pro
        </h1>
        
        <div style={{
          backgroundColor: '#232838',
          padding: '1.5rem',
          borderRadius: '8px',
          minHeight: '400px',
          maxHeight: '600px',
          overflowY: 'auto',
          marginBottom: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          {messages.map((msg, index) => (
            <div key={index} style={{
              marginBottom: '1rem',
              textAlign: msg.role === 'user' ? 'right' : 'left'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                maxWidth: '80%',
                backgroundColor: msg.role === 'user' ? '#3B82F6' : '#374151',
                color: 'white'
              }}>
                <p style={{ margin: 0 }}>{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div style={{ textAlign: 'center', color: '#9CA3AF' }}>
              Loading...
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #374151',
              backgroundColor: '#232838',
              color: 'white',
              outline: 'none'
            }}
          />
          <button 
            type="submit" 
            disabled={isLoading}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3B82F6',
              color: 'white',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'background-color 0.2s',
              ':hover': {
                backgroundColor: '#2563EB'
              }
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
