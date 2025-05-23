import { useState } from 'react';

export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      const assistantMessage = { role: 'assistant', content: data.message };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('API error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      color: '#fff',
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '30px'
      }}>
        LISTING WRITER PRO
      </h1>

      <div style={{
        backgroundColor: '#2a2a2a',
        padding: '1.5rem',
        borderRadius: '8px',
        minHeight: '300px',
        maxHeight: '400px',
        overflowY: 'auto',
        marginBottom: '1.5rem',
        border: '1px solid #333'
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
              backgroundColor: msg.role === 'user' ? '#4a4a4a' : '#3a3a3a',
              color: '#fff'
            }}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <p style={{ color: '#999', textAlign: 'center' }}>Loading...</p>
        )}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: '0.75rem',
            borderRadius: '4px',
            border: '1px solid #444',
            backgroundColor: '#2c2c2c',
            color: '#fff'
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2c2c5a',
            color: '#fff',
            borderRadius: '4px',
            border: 'none',
            fontWeight: '600',
            boxShadow: '0 0 6px rgba(44, 44, 90, 0.4)',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
