import './styles/index.scss';
import { UseTheme } from './providers/ThemeContextProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';
import Navbar from 'widgets/Navbar';

function App() {
  const { theme, toogleTheme } = UseTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button onClick={toogleTheme}>THEME {theme}</button>
      <AppRouter />
    </div>
  );
}

export default App;
