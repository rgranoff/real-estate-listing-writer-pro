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
      backgroundColor: 'white',
      minHeight: '100vh',
      color: 'black',
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
    }}>
      <div className="container mx-auto max-w-4xl p-4">
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '400',
          textAlign: 'center',
          marginBottom: '2rem',
          color: 'black',
          letterSpacing: '2px'
        }}>
          LISTING WRITER PRO
        </h1>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          minHeight: '400px',
          maxHeight: '600px',
          overflowY: 'auto',
          marginBottom: '1.5rem',
          border: '1px solid #e5e5e5',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
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
                backgroundColor: msg.role === 'user' ? '#f0f0f0' : '#e5e5e5',
                color: 'black'
              }}>
                <p style={{ margin: 0 }}>{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div style={{ textAlign: 'center', color: '#666' }}>
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
              borderRadius: '4px',
              border: '1px solid #ccc',
              backgroundColor: 'white',
              color: 'black',
              outline: 'none'
            }}
          />
          <button 
            type="submit" 
            disabled={isLoading}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#666',
              color: 'white',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'background-color 0.2s'
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
