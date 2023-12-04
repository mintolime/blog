import './styles/index.scss';
import { UseTheme } from './providers/ThemeContextProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';

function App() {
  const { theme, toogleTheme } = UseTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>THEME {theme}</button>
      <AppRouter />
    </div>
  );
}

export default App;
