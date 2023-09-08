// External
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

// Internal
import { LANGUAGES } from '../../../constants/constants';

// Styles
import styles from './ProjectDetails.module.scss';
import CodeLinks from '../CodeLinks/CodeLinks';

const ProjectDetails = ({
  description,
  esDescription,
  patterns,
  stack,
  demoLink,
  github,
}) => {
  const theme = useTheme();
  const { t, i18n } = useTranslation('global');
  const { secondaryExtraDark, mode } = theme.palette;
  //   TODO: REFACTOR CON MAPEO PARA NO REPETIR TANTO CÓDIGO IGUAL!
  return (
    <section className={styles.container}>
      <div className={styles.titles}>
        <Typography
          fontWeight={600}
          fontSize={20}
          variant="h2"
          sx={{ marginBottom: '10px' }}
        >
          {t('project.description-title')}
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={16}
          color={
            mode === 'dark'
              ? 'var(--secondaryExtraLight)'
              : secondaryExtraDark.main
          }
        >
          {i18n.language === LANGUAGES.en ? description : esDescription}
        </Typography>
      </div>

      <div className={styles.titles}>
        <Typography
          fontWeight={600}
          fontSize={20}
          variant="h2"
          sx={{ marginBottom: '10px' }}
        >
          {t('project.pattern-design-title')}
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={16}
          color={
            mode === 'dark'
              ? 'var(--secondaryExtraLight)'
              : secondaryExtraDark.main
          }
        >
          {patterns}
        </Typography>
      </div>
      <div className={styles.titles}>
        <Typography
          fontWeight={600}
          fontSize={20}
          variant="h2"
          sx={{ marginBottom: '10px' }}
        >
          {t('project.stack-title')}
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={16}
          color={
            mode === 'dark'
              ? 'var(--secondaryExtraLight)'
              : secondaryExtraDark.main
          }
        >
          {stack}
        </Typography>
      </div>

      <CodeLinks github={github} demoLink={demoLink} />
    </section>
  );
};

export default ProjectDetails;

ProjectDetails.propTypes = {
  description: PropTypes.string,
  esDescription: PropTypes.string,
  patterns: PropTypes.string,
  stack: PropTypes.string,
  demoLink: PropTypes.string,
  github: PropTypes.string,
};
