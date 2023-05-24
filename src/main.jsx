// External
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Internal
import App from './App.jsx';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

// Styles
import { CssBaseline } from '@mui/material';
// import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <I18nextProvider i18n={i18next}>
        <CssBaseline />{' '}
        {/* Restart initial styles and fixes compabilities between browsers*/}
        <App />
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);
