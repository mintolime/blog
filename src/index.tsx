import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './shared/config/i18n/i18n';
import { ThemeContextProvider } from 'app/providers/ThemeContextProvider';
import ErrorBoundary from 'app/providers/ErrorBoundary';
import App from './app/App';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
