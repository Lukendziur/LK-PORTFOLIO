// External
import { useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import createTheme from '@mui/material/styles/createTheme';
import { blueGrey } from '@mui/material/colors';

// Internal
import ColorModeContext from './ColorModeContext';

const ColorModeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme');
  const [mode, setMode] = useState(storedTheme ? storedTheme : 'light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  localStorage.setItem('theme', mode);

  const palette = useMemo(
    () => ({
      mode,
      primary: {
        main: '#007cc5',
      },
      primaryDark: {
        main: '#007cc5',
      },
      secondary: {
        main: blueGrey[500],
      },
      secondaryExtraLight: {
        main: blueGrey[50],
      },
      secondaryDark: {
        main: '#000000',
      },
      secondaryExtraDark: {
        main: 'rgb(67, 87, 97)',
      },
      layoutBackgroundDark: '#121212',
      cardsBgDark: { main: 'hsl(0deg 0% 26.14% / 80%)' },
      cardsBgLight: { main: 'hsla(0,0%,96%,.8)' },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette,
        typography: {
          fontFamily: ['Poppins'],
        },
        components: {
          MuiUseMediaQuery: {
            defaultProps: {
              noSsr: true,
            },
          },
        },
      }),
    [palette]
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
