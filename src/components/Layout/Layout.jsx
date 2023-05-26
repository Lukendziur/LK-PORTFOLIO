// External
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Box, useMediaQuery } from '@mui/material';
import { BREAKPOINTS } from '../../constants/constants';
import SocialMediaBar from '../Molecules/SocialMediaBar/SocialMediaBar';

// Internal
const Navbar = lazy(() => import('../Molecules/Navbar/Navbar'));
const Footer = lazy(() => import('../Atoms/Footer/Footer'));

function MyApp() {
  const theme = useTheme();
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

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
            : theme.palette.layoutBackgroundLight,
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.secondaryExtraLight.main
            : theme.palette.secondaryDark.main,
        borderRadius: 0,
        height: isDesktop ? '100vh' : '',
        p: 0,
      }}
    >
      <Navbar />
      <SocialMediaBar />
      <div
        style={{
          padding: isMobile ? '10px 20px' : '10px 90px',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </Box>
  );
}
const Layout = () => {
  return <div>{MyApp()}</div>;
};

export default Layout;
