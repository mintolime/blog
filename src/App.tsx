import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.scss';
import { MainPageAsync } from './pages/Main/Main.async';
import { NotFoundPageAsync } from './pages/NotFound/NotFound.async';

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>LOADING....</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="*" element={<NotFoundPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
