import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router"
import App from './App.jsx'
import ReactDOM from "react-dom/client"

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
