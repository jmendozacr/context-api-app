import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProviderTheme } from './contexts/contextTheme';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ProviderTheme>
                <App />
            </ProviderTheme>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
