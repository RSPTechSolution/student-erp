import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const options = {
  position: "top-right",
  autoClose: 8000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: "closeOnClick" ,
  rtl: false,
  pauseOnFocusLoss: "pauseOnFocusLoss",
  draggable: "draggable",
  pauseOnHover: "pauseOnHover",
  theme: "light"
}
root.render(
  <React.StrictMode>
    <ToastContainer {...options}/>
    <App />
  </React.StrictMode>
);
