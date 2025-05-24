import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hello! How can I assist you today with crafting a compelling real estate listing description? Just provide me with some details about the property type, bedrooms & bathrooms, notable features, and location highlights. Feel free to mention if you have a preferred tone for the description.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const assistantMessage = { role: 'assistant', content: data.message };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptClick = async (text) => {
    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const assistantMessage = { role: 'assistant', content: data.message };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const prompts = [
    'How to Use This Service',
    'What kind of properties can you write for?',
    'Ask me about my listing',
    'Why should I be compliant?',
  ];

  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: '#000',
          color: '#fff',
          minHeight: '100vh',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, sans-serif',
        }}
      >
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>LISTING WRITER PRO</h1>
          <p style={{ fontSize: '1rem', color: '#aaa', marginBottom: '30px' }}>
            By Robert Granoff
          </p>
          <p
            style={{
              maxWidth: '900px',
              margin: '0 auto 30px',
              fontSize: '1.1rem',
              lineHeight: '1.6',
            }}
          >
            Generates compelling, MLS-compliant real estate listing descriptions that highlight
            property features, engage buyers, and adhere to NAR regulations. Ensures Fair Housing
            compliance while following MLS guidelines across the U.S., crafting persuasive and
            marketable content.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            {prompts.map((text) => (
              <button
                key={text}
                onClick={() => handlePromptClick(text)}
                style={{
                  backgroundColor: '#1c1c3d',
                  color: '#fff',
                  padding: '12px 18px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              backgroundColor: '#222',
              padding: '20px',
              borderRadius: '8px',
              minHeight: '200px',
              marginBottom: '20px',
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.role === 'user' ? 'right' : 'left',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    backgroundColor: '#444',
                    color: '#fff',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ color: '#999', textAlign: 'center' }}>Loading...</div>
            )}
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: '#222',
                color: '#fff',
                fontSize: '1rem',
              }}
            />
            <button
              type="submit"
              disabled={isLoading}
              style={{
                backgroundColor: '#2d2d80',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                padding: '12px 18px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
