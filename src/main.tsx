import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.tsx';
import MovieSelectionpage from './pages/MovieSelectionpage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/selection" element={<MovieSelectionpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
