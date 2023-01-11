import React from 'react';
import ReactDOM from 'react-dom/client';
import '@styles/style.css';
import TrackerApp from '@views/TrackerApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TrackerApp />
  </React.StrictMode>
);
