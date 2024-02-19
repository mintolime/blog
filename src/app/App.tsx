/* eslint-disable jsx-a11y/control-has-associated-label */
import { Suspense } from 'react';

import { classNames } from 'shared/lib/helpers/classNames/classNames';
import Navbar from 'widgets/Navbar';
import SideBar from 'widgets/SideBar';
import { AppRouter } from './providers/router';
import { UseTheme } from './providers/ThemeContextProvider';

function App() {
    const { theme } = UseTheme();

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
