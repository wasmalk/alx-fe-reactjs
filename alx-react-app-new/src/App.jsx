import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <MainContent />

            {/* Add the UserProfile component with the specified props */}
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

            <Footer />
        </div>
    );
}



function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* Header Component */}
            <Header />

            {/* WelcomeMessage Component */}
            <WelcomeMessage />

            {/* Vite + React Section */}
            <div>
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
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

            {/* MainContent Component */}
            <MainContent />

            {/* Footer Component */}
            <Footer />
        </>
    );
}
import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Welcome to My Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
