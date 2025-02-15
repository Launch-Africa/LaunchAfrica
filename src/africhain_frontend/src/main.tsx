import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import App from './App';

const rootElement = document.getElementById("root");
if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}