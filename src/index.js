import React from 'react';
import ReactDOM from 'react-dom/client'; // Use this for React 18+
import App from './App';
import './index.css';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
