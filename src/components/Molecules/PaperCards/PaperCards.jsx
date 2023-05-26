// External
import { Paper, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import { useTranslation } from 'react-i18next';
// Internal

// Styles
import styles from './PaperCards.module.scss';

const PaperCards = () => {
  const theme = useTheme();
  const { t } = useTranslation('global');
  const { secondary, mode } = theme.palette;

  return (
    <section className={styles.cardsContainer}>
      <Paper
        className={styles.paper}
        elevation={24}
        variant="elevation"
        sx={{
          borderRadius: ' 146px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <SchoolRoundedIcon
          sx={{
            fill:
              mode === 'dark'
                ? 'var(--secondaryExtraLight)'
                : 'var(--primaryDark)',
          }}
        />
        <div className={styles.titles}>
          <Typography fontWeight={600} fontSize={16}>
            {t('home.card-title-1')}
          </Typography>
          <Typography
            paddingRight={'5px'}
            fontWeight={400}
            fontSize={14}
            color={
              mode === 'dark' ? 'var(--secondaryExtraLight)' : secondary.main
            }
          >
            {t('home.card-description-1')}
          </Typography>
        </div>
      </Paper>
      <Paper
        className={styles.paper}
        elevation={24}
        variant="elevation"
        sx={{
          borderRadius: ' 146px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <LightbulbRoundedIcon
          sx={{
            fill:
              mode === 'dark'
                ? 'var(--secondaryExtraLight)'
                : 'var(--primaryDark)',
          }}
        />

        <div className={styles.titles}>
          <Typography fontWeight={600} fontSize={16}>
            {t('home.card-title-2')}
          </Typography>
          <Typography
            fontWeight={400}
            fontSize={14}
            paddingRight={'5px'}
            color={
              mode === 'dark' ? 'var(--secondaryExtraLight)' : secondary.main
            }
          >
            {t('home.card-description-2')}
          </Typography>
        </div>
      </Paper>

      <Paper
        className={styles.paper}
        elevation={24}
        variant="elevation"
        sx={{
          borderRadius: ' 146px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <PetsRoundedIcon
          sx={{
            fill:
              mode === 'dark'
                ? 'var(--secondaryExtraLight)'
                : 'var(--primaryDark)',
          }}
        />

        <div className={styles.titles}>
          <Typography fontWeight={600} fontSize={16}>
            {t('home.card-title-3')}
          </Typography>
          <Typography
            paddingRight={'5px'}
            fontWeight={400}
            fontSize={14}
            color={
              mode === 'dark' ? 'var(--secondaryExtraLight)' : secondary.main
            }
          >
            {t('home.card-description-3')}
          </Typography>
        </div>
      </Paper>
    </section>
  );
};

export default PaperCards;
