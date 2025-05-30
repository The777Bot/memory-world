import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('user', username);
      window.location.href = '/globe';
    }, 1000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0f0f0f 100%)',
      overflow: 'hidden',
      fontFamily: 'Orbitron, sans-serif',
      padding: '20px'
    }}>
      {/* Animated particle background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundImage: 'radial-gradient(white 1px, transparent 0)',
        backgroundSize: '20px 20px',
        opacity: 0.04
      }} />

      {/* Login Panel */}
      <div style={{
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        padding: '50px',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            color: '#00ffff',
            fontSize: '3rem',
            textShadow: '0 0 15px #00ffff, 0 0 30px #00ffff',
            marginBottom: '10px',
            fontWeight: 800,
            letterSpacing: '2px'
          }}>
            MEMORY WORLD
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '1.1rem'
          }}>
            Log in to shape your world of memories
          </p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: '15px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none'
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '15px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none'
            }}
          />

          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '15px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#00ffff',
              color: '#000',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff',
              transform: 'scale(1)',
              transition: 'all 0.3s ease',
              opacity: isLoading ? 0.7 : 1
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            {isLoading ? (
              <>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid #000',
                  borderTop: '2px solid transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  marginRight: '10px'
                }} />
                Logging in...
              </>
            ) : (
              'Enter Memory World'
            )}
          </button>
        </form>

        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&display=swap');
          `}
        </style>
      </div>
    </div>
  );
}

export default Login;
