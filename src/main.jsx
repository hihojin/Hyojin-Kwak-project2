import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GameProvider } from './GameContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GameProvider>
);
