import { Suspense, useEffect } from 'react';
import './styles/index.scss';

import { classNames } from 'shared/lib/helpers/classNames/classNames';
import Navbar from 'widgets/Navbar';
import SideBar from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal/Modal';
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
                    <Modal />
                    <SideBar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
}

export default App;
