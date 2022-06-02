import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

// Main Pages //
import App from './pages/App'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import Read from './pages/Read'
// Read Pages //
import Allowance from './pages/read-pages/Allowance'
import BalanceOf from './pages/read-pages/BalanceOf'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/createaccount" element={<CreateAccount/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/read" element={<Read/>}/>
      <Route path="/allowance" element={<Allowance/>}/>
      <Route path="/balanceof" element={<BalanceOf/>}/>
    </Routes>
  </BrowserRouter>
);

