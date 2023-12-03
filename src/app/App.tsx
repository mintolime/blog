import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { classNames } from 'helpers/classNames/classNames';
import { UseTheme } from './providers';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFound';

function App() {
  const { theme, toogleTheme } = UseTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>THEME {theme}</button>
      <Suspense fallback={<div>LOADING....</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
