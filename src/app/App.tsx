import { Suspense } from 'react';
import './styles/index.scss';

import { UseTheme } from './providers/ThemeContextProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { AppRouter } from './providers/router';
import Navbar from 'widgets/Navbar';
import SideBar from 'widgets/SideBar';

function App() {
  const { theme } = UseTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <main className='main'>
      <SideBar/>
      <AppRouter />
      </main>
    </div>
  );
}

export default App;
