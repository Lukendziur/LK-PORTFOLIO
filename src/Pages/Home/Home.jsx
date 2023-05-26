// External
import { Chip, Divider, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import { useTheme } from '@emotion/react';
// Internal
import PaperCards from '../../components/Molecules/PaperCards/PaperCards';
import { BREAKPOINTS } from '../../constants/constants';
import Avatar from './../../assets/avatar-new1.png';

// Styles
import styles from './Home.module.scss';
const Home = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const [t] = useTranslation('global');
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);

  return (
    <>
      <section className={styles.home}>
        <div className={styles.about}>
          <Typography
            variant="h1"
            fontSize={24}
            maxWidth={isMobile ? 'initial' : 364}
          >
            {t('home.job-title')}
          </Typography>
          <Typography
            variant="h2"
            fontWeight={600}
            maxWidth={isMobile ? 'initial' : 364}
            fontSize={isMobile ? '4rem' : '6rem'}
          >
            {t('home.name')}
          </Typography>
          <Divider flexItem>
            <Chip icon={<ComputerRoundedIcon className={styles.icon} />} />
          </Divider>
          <Typography
            variant="h3"
            lineHeight={2}
            fontSize={isMobile ? 14 : 18}
            textAlign="justify"
            color={
              mode === 'light'
                ? 'var(--secondaryExtraDark)'
                : 'var(--secondaryExtraLight)'
            }
            fontWeight={400}
          >
            {t('home.resume')}
          </Typography>
        </div>
        <div className={styles.visual}>
          <div className={styles.userBg}>
            <img src={Avatar} alt="Avatar" />
          </div>
        </div>
      </section>
      <PaperCards />
    </>
  );
};

export default Home;
