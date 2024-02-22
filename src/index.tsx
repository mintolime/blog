import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './app/styles/index.scss';
import './shared/config/i18n/i18n';
import { ThemeContextProvider } from 'app/providers/ThemeContextProvider';
import ErrorBoundary from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeContextProvider>
                    <App />
                </ThemeContextProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
