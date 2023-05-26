// External

// Internal
import { BREAKPOINTS } from '../../../constants/constants';
import { Paper, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import TabletImg from '../../../assets/light-tablet-EN.png';
import TabletDark from '../../../assets/dark-tablet-EN.png';

// Styles
import styles from './ResponsiveProjectDemo.module.scss';

const ResponsiveProjectDemo = () => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);
  const theme = useTheme();
  const { mode } = theme.palette;

  return isMobile ? (
    <img
      src={mode === 'dark' ? TabletImg : TabletDark}
      className={styles.mobileImage}
      alt=""
    />
  ) : (
    <Paper
      className={styles.tablet}
      elevation={8}
      variant="elevation"
      sx={{
        backgroundImage: `url('/src/assets/${
          mode === 'dark' ? 'light' : 'dark'
        }-tablet-EN.png')`,
      }}
    >
      <Paper
        className={styles.desktop}
        elevation={8}
        variant="elevation"
        sx={{
          backgroundImage: `url('/src/assets/${
            mode === 'dark' ? 'Light-Desktop-EN.png' : 'dark-desktop-EN.png'
          }')`,
        }}
      />
      <Paper
        className={styles.mobile}
        elevation={8}
        variant="elevation"
        sx={{
          backgroundImage: `url('/src/assets/${
            mode === 'dark' ? 'light' : 'dark'
          }-mobile-EN.png')`,
        }}
      />
    </Paper>
  );
};

export default ResponsiveProjectDemo;
