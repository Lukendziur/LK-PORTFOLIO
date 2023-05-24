import { useTheme } from "@emotion/react";
import {  Box, IconButton } from "@mui/material";
import { useContext } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ColorModeContext from "../../context/ColorModeContext/ColorModeContext";
import { Outlet } from 'react-router-dom';
import Navbar from "../Atoms/Navbar.jsx/Navbar";


function MyApp() {
   
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);   
    // xs: un objeto donde se le puede mandar cualquier propiedad de css
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.layoutBackgroundDark : theme.palette.layoutBackgroundLight ,//'background.default',
          color: theme.palette.mode === 'dark' ? theme.palette.secondaryExtraLight.main : theme.palette.secondaryDark.main,
          borderRadius: 0,
          height: '100vh',
          p: 0,
        }}
      >
        <Navbar />
        <div>
        {theme.palette.mode}
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </div>
        <Outlet />
        <h2>ESTE ES EL FOOTER</h2>


     </Box>
    );
  }
const Layout = () => {
  return (
    <div>{MyApp()}</div>
  )
}

export default Layout