import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './Context';
import './theme.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Context />
    </React.StrictMode>
);
