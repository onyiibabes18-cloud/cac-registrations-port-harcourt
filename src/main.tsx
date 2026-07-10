import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root');

if (!rootEl) {
  document.body.innerHTML =
    '<div style="display:flex;min-height:100vh;align-items:center;justify-content:center;font-family:system-ui,sans-serif;color:#1e3a8a;"><p>Root element not found. Please refresh the page.</p></div>';
} else {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
