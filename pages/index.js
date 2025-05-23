export default function Home() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '20px' }}>
        Listing Writer Pro
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', marginBottom: '30px' }}>
        Welcome to the AI-powered real estate listing generator. MLS-compliant, Fair Housing-safe, and tailored for high-converting copy.
      </p>
      <a
        href="/chat"
        style={{
          backgroundColor: '#2c2c5a',
          color: '#fff',
          padding: '14px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '1rem'
        }}
      >
        Launch Chat Assistant
      </a>
    </div>
  );
}
