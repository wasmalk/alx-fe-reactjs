import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import routing components
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import HomePage from "./components/HomePage"; // Import HomePage component
import RecipeDetail from "./components/RecipeDetail"; // Import RecipeDetail component

function App() {
  const [count, setCount] = useState(0); // Hook for counter state

  return (
    <BrowserRouter>
      {/* Define Routes for the application */}
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <div>
              <HomePage />
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
          }
        />

        {/* Recipe Detail Route */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
