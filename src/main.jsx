import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil'; // Import RecoilRoot from Recoil
import App from './App.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot> {/* Wrap your App component with RecoilRoot */}
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
