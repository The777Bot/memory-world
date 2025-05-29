/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import GlobeScreen from './components/GlobeScreen';
import MemoryModal from './components/MemoryModal';

function App() {
  const isLoggedIn = localStorage.getItem('user');
  const [showMemoryModal, setShowMemoryModal] = useState(false);
  const [memories, setMemories] = useState([]);

  const handleMemorySubmit = (memoryData) => {
    console.log('Memory submitted:', memoryData);
    const newMemory = {
      ...memoryData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };
    console.log('New memory created:', newMemory);
    setMemories(prev => {
      const updatedMemories = [...prev, newMemory];
      console.log('Updated memories array:', updatedMemories);
      return updatedMemories;
    });
    setShowMemoryModal(false);
  };

  // Debug log for memories
  React.useEffect(() => {
    console.log('Memories state updated:', memories);
  }, [memories]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!isLoggedIn ? <Login /> : <Navigate to="/globe" />} />
        <Route path="/globe" element={
          isLoggedIn ? (
            <>
              <GlobeScreen 
                showMemoryModal={showMemoryModal}
                setShowMemoryModal={setShowMemoryModal}
                memories={memories}
                setMemories={setMemories}
                onMemorySubmit={handleMemorySubmit}
              />
              {showMemoryModal && (
                <MemoryModal 
                  onClose={() => {
                    console.log('Closing modal');
                    setShowMemoryModal(false);
                  }}
                  onSubmit={handleMemorySubmit}
                />
              )}
            </>
          ) : (
            <Navigate to="/" />
          )
        } />
      </Routes>
    </Router>
  );
}

export default App;


