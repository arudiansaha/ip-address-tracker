import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/style.css';
import App from '@views/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);