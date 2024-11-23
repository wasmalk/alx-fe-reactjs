import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./PostsComponent"; // Ensure this component exists

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    // Provide the queryClient to your app through QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div className="App">
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
        <h2>React Query Demo</h2>
        <PostsComponent /> {/* Displaying the PostsComponent */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
