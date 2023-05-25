/* eslint-disable no-unused-vars */
// External
import { Chip, Divider, Paper, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import { useTheme } from '@emotion/react';
// Internal
import { BREAKPOINTS } from '../../constants/constants';

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
          <Typography variant="h4" fontSize={24}>
            {t('home.job-title')}
          </Typography>
          <Typography
            variant="h1"
            fontWeight={600}
            maxWidth={364}
            fontSize={isMobile ? '4rem' : '6rem'}
          >
            {t('home.name')}
          </Typography>
          <Divider flexItem>
            <Chip icon={<ComputerRoundedIcon className={styles.icon} />} />
          </Divider>
          <Typography
            variant="h6"
            fontSize={isMobile ? 14 : 18}
            textAlign="justify"
            color={
              mode === 'light'
                ? 'var(--secondary)'
                : 'var(--secondaryExtraLight)'
            }
            fontWeight={400}
          >
            {t('home.resume')}
          </Typography>
        </div>
        <div className={styles.visual}>
          <div className={styles.userBg}></div>
        </div>
      </section>
      <section className={styles.cardsContainer}>
        <Paper
          className={styles.paper}
          elevation={24}
          variant="elevation"
          sx={{ borderRadius: ' 146px' }}
        />
        <Paper
          className={styles.paper}
          elevation={24}
          variant="elevation"
          sx={{ borderRadius: ' 146px' }}
        />
        <Paper
          className={styles.paper}
          elevation={24}
          variant="elevation"
          sx={{ borderRadius: ' 146px' }}
        />
      </section>
    </>
  );
};

export default Home;
