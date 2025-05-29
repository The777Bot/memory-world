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
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    }}>
      <div style={{
        backgroundColor: 'black',
        padding: '24px',
        borderRadius: '4px',
        width: '350px',
        color: 'white'
      }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>🧠 Add Memory</h2>
        <textarea
          rows="4"
          placeholder="Describe your memory..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginLeft: '-4px',
            marginBottom: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            resize: 'vertical'
          }}
        />
        <select
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '12px',
            border: '1px solid #ccc',
            borderRadius: '4px'
            
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
          justifyContent: 'space-between'
        }}>
          <button 
            onClick={handleSubmit}
            style={{
              backgroundColor: '#16a34a',
              color: 'white',
              padding: '4px 16px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Save
          </button>
          <button 
            onClick={onClose}
            style={{
              color: '#dc2626',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemoryModal;
