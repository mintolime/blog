import { Suspense, useEffect } from 'react';
import './styles/index.scss';

import { classNames } from 'shared/lib/helpers/classNames/classNames';
import Navbar from 'widgets/Navbar';
import SideBar from 'widgets/SideBar';
import { AppRouter } from './providers/router';
import { UseTheme } from './providers/ThemeContextProvider';

function App() {
    const { theme } = UseTheme();

    // useEffect(() => {
    //     throw new Error('');
    // }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <main className="main">
                    <SideBar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
}

export default App;
