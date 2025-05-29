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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            {emotionEmojis[memory.emotion]} Memory
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-800 whitespace-pre-wrap">{memory.text}</p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">Emotion:</span>
            <span className="capitalize">{memory.emotion}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">Location:</span>
            <span>{memory.lat.toFixed(2)}°, {memory.lng.toFixed(2)}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoryDetailWindow; 