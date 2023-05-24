// External
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';

// Internal
const Navbar = lazy(() => import('../Atoms/Navbar/Navbar'));
const Footer = lazy(() => import('../Atoms/Footer/Footer'));

function MyApp() {
  const theme = useTheme();
  // xs: un objeto donde se le puede mandar cualquier propiedad de css
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        bgcolor:
          theme.palette.mode === 'dark'
            ? theme.palette.layoutBackgroundDark
            : theme.palette.layoutBackgroundLight, //'background.default',
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.secondaryExtraLight.main
            : theme.palette.secondaryDark.main,
        borderRadius: 0,
        height: '100vh',
        p: 0,
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}
const Layout = () => {
  return <div>{MyApp()}</div>;
};

export default Layout;
