import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import './App.css';

function App() {
  const [name, setName] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  async function greet() {
    const message = await invoke<string>('greet', { name });
    setGreeting(message);
  }

  return (
    <div className="container">
      <h1>Tauri Desktop</h1>
      <input
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={greet}>Chào!</button>
      <p>{greeting}</p>
    </div>
  );
}

export default App;
