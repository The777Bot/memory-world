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
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '22px',
        width: '380px',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '6px'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            color: 'black',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            {emotionEmojis[memory.emotion]} Memory
          </h2>
          <button
            onClick={onClose}
            style={{
              color: '#000000',
              borderRadius:'3px',
              backgroundColor: '#f52727',
              background: 'none',
              border: 'red',
              cursor: 'pointer',
              fontSize: '1.25rem'
            }}
          >
            ✕
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            backgroundColor: '#f9fafb',
            padding: '16px',
            borderRadius: '8px'
          }}>
            <p style={{
              color: '#1f2937',
              whiteSpace: 'pre-wrap'
            }}>
              {memory.text}
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.875rem',
            color: '#4b5563'
          }}>
            <span style={{ fontWeight: 500 }}>Emotion:</span>
            <span style={{ textTransform: 'capitalize' }}>{memory.emotion}</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.875rem',
            color: '#4b5563'
          }}>
            <span style={{ fontWeight: 500 }}>Location:</span>
            <span>{memory.lat.toFixed(2)}°, {memory.lng.toFixed(2)}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoryDetailWindow; 