import { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import MemoryDetailWindow from './MemoryDetailWindow';

function GlobeScreen({ 
  showMemoryModal, 
  setShowMemoryModal, 
  memories, 
  setMemories,
  onMemorySubmit 
}) {
  const globeContainerRef = useRef();
  const globeInstanceRef = useRef(null);
  const [selectedMemory, setSelectedMemory] = useState(null);

  // Setup globe once
  useEffect(() => {
    if (!globeContainerRef.current) return;

    // Handle window resize
    const handleResize = () => {
      if (globeInstanceRef.current) {
        globeInstanceRef.current
          .width(window.innerWidth)
          .height(window.innerHeight);
      }
    };

    // Initial setup
    globeInstanceRef.current = Globe()(globeContainerRef.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .backgroundColor('#000')
      .pointLat('lat')
      .pointLng('lng')
      .pointColor('color')
      .pointAltitude('altitude')
      .pointRadius(0.2)
      .width(window.innerWidth)
      .height(window.innerHeight);

    // Configure controls
    globeInstanceRef.current.controls().autoRotate = true;
    globeInstanceRef.current.controls().autoRotateSpeed = 0.3;
    globeInstanceRef.current.controls().enableZoom = true;
    globeInstanceRef.current.controls().minDistance = 200;
    globeInstanceRef.current.controls().maxDistance = 500;

    // Set initial view
    globeInstanceRef.current.pointOfView({ lat: 0, lng: 0, altitude: 2 }, 0);

    // Add click handler for points
    globeInstanceRef.current.onPointClick((point) => {
      if (point.memory) {
        setSelectedMemory(point.memory);
      }
    });

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update globe markers
  useEffect(() => {
    if (globeInstanceRef.current) {
      const markers = memories.map(memory => {
        const lat = (Math.random() - 0.5) * 180;
        const lng = (Math.random() - 0.5) * 360;

        const emotionColorMap = {
          joy: 'yellow',
          sadness: 'blue',
          anger: 'red',
          love: 'pink',
          fear: 'purple',
          surprise: 'orange',
          disgust: 'green',
          default: 'white',
        };

        return {
          lat,
          lng,
          color: emotionColorMap[memory.emotion] || emotionColorMap.default,
          altitude: 0.03,
          memory: {
            ...memory,
            lat,
            lng,
          },
        };
      });

      globeInstanceRef.current.pointsData(markers);
    }
  }, [memories]);

  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#000'
    }}>
      {/* 🌍 Globe */}
      <div
        ref={globeContainerRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />

      {/* 🔴 Logout Button */}
      <button
        onClick={() => {
          localStorage.removeItem('user');
          window.location.href = '/';
        }}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: 'red',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '8px',
          zIndex: 2,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        Logout
      </button>

      {/* ➕ Add Memory Button */}
      <button
        onClick={() => setShowMemoryModal(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          zIndex: 2,
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        + Add Memory
      </button>

      {/* 📝 Memory Detail Window */}
      {selectedMemory && (
        <MemoryDetailWindow
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
        />
      )}
    </div>
  );
}

export default GlobeScreen;
