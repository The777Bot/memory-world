import React from 'react';

function MemoryDetailWindow({ memory, onClose }) {
  if (!memory) return null;

  const emotionEmojis = {
    joy: '😊',
    sadness: '😢',
    anger: '😡',
    love: '❤️',
    fear: '😨',
    surprise: '😲',
    disgust: '🤢',
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(45, 52, 54, 0.8))',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      display: 'flex',
      textShadow: '0 0 15px rgb(109, 119, 119), 0 0 30px rgb(28, 31, 31)',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: '20px'
    }}>
     <div style={{
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderRadius: '20px',
  padding: '30px',
  width: '100%',
  maxWidth: '450px',
  textShadow: '0 0 15px #1a1a1a, 0 0 30px #444',
  boxShadow: `
    0 0 30px rgba(0, 255, 255, 0.2),
    0 0 60px rgba(0, 255, 255, 0.15),
    0 0 80px rgba(0, 255, 255, 0.1)
  `,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: 'white',
  fontFamily: 'sans-serif'
}}>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            display: 'flex',
            textShadow: '0 0 15px rgb(36, 43, 43), 0 0 30px rgb(118, 128, 121)',
            alignItems: 'center',
            gap: '10px'
          }}>
            {emotionEmojis[memory.emotion]} Memory
          </h2>
          <button
            onClick={onClose}
            style={{
              fontSize: '1.2rem',
              color: '#fff',
              backgroundColor: 'rgba(255, 0, 0, 0.7)',
              border: 'none',
              borderRadius: '8px',
              
              padding: '4px 10px',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => { e.target.style.backgroundColor = 'rgba(255, 0, 0, 1)' }}
            onMouseOut={(e) => { e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.7)' }}
          >
            ✕
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  padding: '16px',
  borderRadius: '12px',
  color: '#f1f5f9',
  whiteSpace: 'pre-wrap',
  boxShadow: 'inset 0 0 8px rgba(255, 255, 255, 0.1)',
  textShadow: '0 0 10px rgba(200, 255, 255, 0.3)'
}}>

            {memory.text}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.95rem',
            color: '#d1d5db'
          }}>
            <span style={{ fontWeight: 600 }}>Emotion:</span>
            <span style={{ textTransform: 'capitalize' }}>{memory.emotion}</span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.95rem',
            color: '#d1d5db'
          }}>
            <span style={{ fontWeight: 600 }}>Location:</span>
            <span>{memory.lat.toFixed(2)}°, {memory.lng.toFixed(2)}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoryDetailWindow;
