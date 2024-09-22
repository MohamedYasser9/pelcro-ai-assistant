import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
