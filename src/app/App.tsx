/* eslint-disable jsx-a11y/control-has-associated-label */
import { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';

import { classNames } from 'shared/lib/helpers/classNames/classNames';
import Navbar from 'widgets/Navbar';
import SideBar from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './providers/router';
import { UseTheme } from './providers/ThemeContextProvider';

function App() {
    const { theme } = UseTheme();
    const [isOpen, setIsOpen] = useState(false);
    // useEffect(() => {
    //     throw new Error('');
    // }, []);
    const onClosePopup = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else { setIsOpen(false); }
    };

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <button type="button" onClick={() => setIsOpen(true)}>Открыть</button>
                <Navbar />
                <main className="main">
                    <Modal isOpen={isOpen} onClose={onClosePopup}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci laudantium nobis, corporis culpa porro quibusdam repellendus
                        obcaecati nihil, harum eos,
                        dolores officiis sint eum deleniti cupiditate quia inventore saepe vitae
                    </Modal>
                    <SideBar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
}

export default App;
