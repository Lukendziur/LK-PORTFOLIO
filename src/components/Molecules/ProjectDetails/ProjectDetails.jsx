// External
import { useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';

// Internal

// Styles
import styles from './ProjectDetails.module.scss';

const ProjectDetails = () => {
  const theme = useTheme();
  const { t } = useTranslation('global');
  const { secondaryExtraDark, mode } = theme.palette;
  //   TODO: REFACTOR CON MAPEO PARA NO REPETIR TANTO CÓDIGO IGUAL!
  return (
    <section className={styles.container}>
      <div className={styles.titles}>
        <Typography fontWeight={600} fontSize={16}>
          DESCRIPCIÓN
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={14}
          color={
            mode === 'dark'
              ? 'var(--secondaryExtraLight)'
              : secondaryExtraDark.main
          }
        >
          {t('home.card-description-1')}
        </Typography>
      </div>

      <div className={styles.titles}>
        <Typography fontWeight={600} fontSize={16}>
          PATRONES DE DISEÑO
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={14}
          color={
            mode === 'dark'
              ? 'var(--secondaryExtraLight)'
              : secondaryExtraDark.main
          }
        >
          {t('home.card-description-1')}
        </Typography>
      </div>
      <div className={styles.titles}>
        <Typography fontWeight={600} fontSize={16}>
          TECNOLOGÍAS IMPLEMENTADAS
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={14}
          color={
            mode === 'dark'
              ? 'var(--secondaryExtraLight)'
              : secondaryExtraDark.main
          }
        >
          {t('home.card-description-1')}
        </Typography>
      </div>

      <div className={styles.buttonContainer}>
        <Button className={styles.button}>VIEW CODE</Button>
        <Button className={styles.button}>DEMO</Button>
      </div>
    </section>
  );
};

export default ProjectDetails;
