export default function ChatPage() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      padding: '40px 20px',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: '700',
        marginBottom: '30px'
      }}>
        LISTING WRITER PRO
      </h1>

      {/* Insert your existing chat UI component below */}
      {/* For example: */}
      <ChatInterface />
    </div>
  );
}

