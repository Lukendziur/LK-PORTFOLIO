import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import ColorModeProvider from './context/ColorModeContext/ColorModeProvider';



export default function App() {
 
  return (
    <ColorModeProvider>
      <React.Suspense>
        <RouterProvider router={router()} />
      </React.Suspense>
    </ColorModeProvider>
  );
}