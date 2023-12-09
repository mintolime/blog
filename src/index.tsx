import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './shared/config/i18n/i18n';
import { ThemeContextProvider } from 'app/providers/ThemeContextProvider';
import App from './app/App';

render(
    <BrowserRouter>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
