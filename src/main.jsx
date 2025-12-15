import React from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { GlobalStyle } from './styles/GlobalStyle.js';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);