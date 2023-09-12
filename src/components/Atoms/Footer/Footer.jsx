// External
import { Typography, useMediaQuery } from '@mui/material';
// Internal
import SocialMediaBar from '../../Molecules/SocialMediaBar/SocialMediaBar';
import { BREAKPOINTS } from '../../../constants/constants';
// Styles
import styles from './Footer.module.scss';

const Footer = () => {
  const isMobile = useMediaQuery(BREAKPOINTS.minMobile);

  return (
    <footer className={styles.footer}>
      {isMobile && <SocialMediaBar className={styles.footerSocialMedia} />}

      <Typography>Developed by L.V.K</Typography>
    </footer>
  );
};

export default Footer;
