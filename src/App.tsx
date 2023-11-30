import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { MainPageAsync } from './pages/Main/Main.async';
import { NotFoundPageAsync } from './pages/NotFound/NotFound.async';
import { UseTheme } from './theme/UseTheme';
import { classNames } from './components/helpers/classNames/classNames';

function App() {
  const { theme, toogleTheme } = UseTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>THEME {theme}</button>
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
