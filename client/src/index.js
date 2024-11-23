import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import { NewsProvider } from './context/NewsContext';

ReactDOM.render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
