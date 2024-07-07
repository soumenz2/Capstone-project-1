import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage.tsx';
import MovieSelectionpage from './pages/MovieSelectionpage.tsx';
import HomePage from './pages/HomePage.tsx';
import MoviesList from './pages/MovieListPage.tsx';
import store from './redux/store.ts';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage />}>
          <Route index element={<RegistrationPage />} />
        </Route>
        <Route path="/selection" element={<MovieSelectionpage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/movielistpage" element={<MoviesList />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
