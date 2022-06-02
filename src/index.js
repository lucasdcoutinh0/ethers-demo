import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

// Main Pages //
import App from './pages/App'
import CreateAccount from './pages/CreateAccount'
import Home from './pages/Home'
import Read from './pages/Read'
import Write from './pages/Write';
// Read Pages //
import Allowance from './pages/read-pages/Allowance'
import BalanceOf from './pages/read-pages/BalanceOf'
//Write Pages //
import Approve from './pages/write-pages/Approve'
import Burn from './pages/write-pages/Burn'
import BurnFrom from './pages/write-pages/BurnFrom'
import DecreaseAllowance from './pages/write-pages/DecreaseAllowance'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/createaccount" element={<CreateAccount/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/read" element={<Read/>}/>
      <Route path="/write" element={<Write/>}/>
      <Route path="/allowance" element={<Allowance/>}/>
      <Route path="/balanceof" element={<BalanceOf/>}/>
      <Route path="/approve" element={<Approve/>}/>
      <Route path="/burn" element={<Burn/>}/>
      <Route path="/burnfrom" element={<BurnFrom/>}/>
      <Route path="/decreaseallowance" element={<DecreaseAllowance/>}/>
    </Routes>
  </BrowserRouter>
);

