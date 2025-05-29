import { useState } from 'react';

function Login() {
  const [name, setName] = useState('');

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem('user', name.trim());
      window.location.href = '/globe';
    }
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-gradient-to-br from-black to-gray-900 text-white">
      <h1 className="text-3xl mb-4">🌱 Memory Garden</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="p-2 rounded bg-gray-800 border border-gray-600 text-white w-64 mb-4"
      />
      <button
        onClick={handleLogin}
        style={{
            cursor: 'pointer'
        }}
        className="px-6 py-2 bg-green-600 rounded hover:bg-green-700 transition"
        
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
