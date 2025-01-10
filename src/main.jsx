import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App.jsx';

// Wrap the app with BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <App />
    
  </StrictMode>
);
