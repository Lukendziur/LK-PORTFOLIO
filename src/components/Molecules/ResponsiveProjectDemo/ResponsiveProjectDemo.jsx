// External
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// Internal
import { BREAKPOINTS } from '../../../constants/constants';
import { Paper, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

// Styles
import styles from './ResponsiveProjectDemo.module.scss';

const ResponsiveProjectDemo = ({ images }) => {
  const [img, setImg] = useState({});
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);
  const theme = useTheme();
  const { mode } = theme.palette;

  const tabletImg = mode === 'dark' ? img[0]?.tabletImg : img[1]?.darkTabletImg;
  const mobileImg = mode === 'dark' ? img[0]?.mobileImg : img[1]?.darkMobileImg;
  const desktopImg =
    mode === 'dark' ? img[0]?.desktopImg : img[1]?.darkDesktopImg;

  useEffect(() => {
    if (images) {
      setImg(images);
    }
  }, [images]);

  return isMobile ? (
    <img src={tabletImg} className={styles.mobileImage} alt="" />
  ) : (
    <Paper
      className={styles.tablet}
      elevation={8}
      variant="elevation"
      sx={{
        backgroundImage: `url('${tabletImg}')`,
      }}
    >
      <Paper
        className={styles.desktop}
        elevation={8}
        variant="elevation"
        sx={{
          backgroundImage: `url('${desktopImg}')`,
        }}
      />
      <Paper
        className={styles.mobile}
        elevation={8}
        variant="elevation"
        sx={{
          backgroundImage: `url('${mobileImg}')`,
        }}
      />
    </Paper>
  );
};

export default ResponsiveProjectDemo;

ResponsiveProjectDemo.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()),
};
