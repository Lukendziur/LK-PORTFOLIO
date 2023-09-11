// External
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Internal
import App from './App.jsx';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
import DataProvider from './context/ColorModeContext/DataProvider.jsx';

// Styles
import '@fontsource/Poppins/400.css';
import '@fontsource/Poppins/500.css';
import { CssBaseline } from '@mui/material';

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
      <DataProvider>
        <I18nextProvider i18n={i18next}>
          <CssBaseline />
          <App />
        </I18nextProvider>
      </DataProvider>
    </Suspense>
  </React.StrictMode>
);
