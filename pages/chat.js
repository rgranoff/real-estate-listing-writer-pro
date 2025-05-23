import { useState, useEffect } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Hello! How can I assist you today with crafting a compelling real estate listing description? Just provide me with some details about the property type, bedrooms & bathrooms, notable features, and location highlights. Feel free to mention if you have a preferred tone for the description.',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');

    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptClick = (text) => setInput(text);

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '10px'
      }}>LISTING WRITER PRO</h1>

      <p style={{ textAlign: 'center', fontSize: '1rem', color: '#ccc', marginBottom: '30px' }}>
        By Robert Granoff
      </p>

      <p style={{
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 30px',
        fontSize: '1.15rem',
        lineHeight: '1.6',
        color: '#ccc'
      }}>
        Generates compelling, MLS-compliant real estate listing descriptions that highlight property features, engage buyers, and adhere to NAR regulations. Ensures Fair Housing compliance while following MLS guidelines across the U.S., crafting persuasive and marketable content.
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '12px',
        marginBottom: '30px'
      }}>
        {[
          'How to Use This Service',
          'What kind of properties can you write for?',
          'Ask me about my listing',
          'Why should I be compliant?'
        ].map((text) => (
          <button
            key={text}
            onClick={() => handlePromptClick(text)}
            style={{
              backgroundColor: '#1c1c3d',
              color: 'white',
              padding: '14px 22px',
              borderRadius: '8px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {text}
          </button>
        ))}
      </div>

      <div style={{
        backgroundColor: '#1e1e1e',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '1px solid #2c56e2',
        marginBottom: '20px',
        maxHeight: '400px',
        overflowY: 'auto'
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.role === 'user' ? 'right' : 'left', marginBottom: '1rem' }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: msg.role === 'user' ? '#2e2e2e' : '#333',
              color: '#fff',
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid #2c56e2',
              maxWidth: '80%'
            }}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && <div style={{ color: '#aaa', textAlign: 'center' }}>Loading...</div>}
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
            borderRadius: '6px',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            border: '1px solid #2c56e2',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            backgroundColor: '#2c2c5a',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
