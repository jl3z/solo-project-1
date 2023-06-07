import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';

import styles from './scss/app.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App tab="home" />);
