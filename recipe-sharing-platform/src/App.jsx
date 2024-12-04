import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import HomePage from './components/HomePage'; // Import HomePage component

function App() {
  const [count, setCount] = useState(0); // Hook for counter state

  return (
    <div>
      <HomePage /> {/* Display the HomePage component */}
      <div>
        {/* Display Vite and React logos */}
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1>Vite + React</h1>

      {/* Card to interact with the count state */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR (Hot Module Replacement).
        </p>
      </div>

      {/* Documentation link */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default App;
