import { useState } from 'react';

function MemoryModal({ onClose, onSubmit }) {
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState('love');

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit({ text, emotion });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(0,0,0,0.6), rgba(45,52,54,0.8))',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: '20px'
    }}>
     <div style={{
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  padding: '24px',
  borderRadius: '16px',
  width: '380px',
  color: 'white',
  boxShadow: `
    0 0 20px rgba(0, 255, 255, 0.3),
    0 0 40px rgba(0, 255, 255, 0.2)
  `,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  fontFamily: 'sans-serif',
  textShadow: '0 0 10px rgba(255, 255, 255, 0.15)'
}}>

        <h2 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>🧠 Add Memory</h2>

        <textarea
          rows="4"
          placeholder="Describe your memory..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: '90%',
            padding: '12px',
           
            marginBottom: '16px',
            backgroundColor: 'rgba(87, 87, 87, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            resize: 'vertical',
            color: '#e5e7eb',
            fontSize: '0.95rem',
            outline: 'none'
          }}
        />

        <select
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '16px',
            backgroundColor: 'rgba(58, 57, 57, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            color: '#3d3e40',
            fontSize: '0.95rem',
            outline: 'none'
          }}
        >
          <option value="love">❤️ Love</option>
          <option value="anger">😡 Anger</option>
          <option value="fear">😨 Fear</option>
          <option value="joy">😊 Joy</option>
          <option value="sadness">😢 Sadness</option>
          <option value="disgust">🤢 Disgust</option>
          <option value="surprise">😲 Surprise</option>
        </select>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '8px'
        }}>
          <button
            onClick={handleSubmit}
            style={{
                backgroundColor: '#16a34a',
                color: 'white',
                padding: '6px 8px',
                borderRadius: '6px',
                
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 10px rgba(34, 197, 94, 0.6)',
                transition: 'box-shadow 0.3s ease-in-out'
              }}
              
            onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.target.style.transform = 'scale(1)'}
          >
            Save
          </button>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 0, 0, 0.7)',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              transition: 'all 0.2s ease-in-out'
            }}
            onMouseOver={e => e.target.style.background = 'rgba(255, 0, 0, 1)'}
            onMouseOut={e => e.target.style.background = 'rgba(255, 0, 0, 0.7)'}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemoryModal;
