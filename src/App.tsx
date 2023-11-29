import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { MainPageAsync } from './pages/Main/Main.async';
import { NotFoundPageAsync } from './pages/NotFound/NotFound.async';
import { ThemeContext } from './theme/ThemeContext';
import { Theme } from './theme/type';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme)
  return (
    <div className={`app ${theme}`}>
      <button
        onClick={() => {
          setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
        }}
        >
        THEME {theme}
      </button>
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
