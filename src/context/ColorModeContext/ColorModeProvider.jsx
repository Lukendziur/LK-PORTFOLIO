import PropTypes from "prop-types";
import ColorModeContext from "./ColorModeContext";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { teal, blueGrey, grey } from '@mui/material/colors';

const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const palette = {
    mode, 
    primary: {
      main: teal[500],
    },
    primaryLight: {
      main:teal[200]
    },
    primaryDark: {
      main: teal[700],
    },
    secondary: {
      main: blueGrey[500],
    },
    secondaryExtraLight: {
      main: blueGrey[50]
    },
    secondaryLight: {
      main: blueGrey[200]
    },
    secondaryDark: {
      main: blueGrey[800],
    },
    secondaryExtraDark: {
      main: blueGrey[900],
    },
    layoutBackgroundDark: '#121212'
    ,
    layoutBackgroundLight: grey[50]
    
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;

ColorModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
