// External
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// Internal
import { LANGUAGES } from '../../../constants/constants';

// Styles
import styles from './ProjectDetails.module.scss';

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
  const { secondaryExtraDark, mode, secondaryDark, secondaryExtraLight } =
    theme.palette;
  //   TODO: REFACTOR CON MAPEO PARA NO REPETIR TANTO CÓDIGO IGUAL!
  return (
    <section className={styles.container}>
      <div className={styles.titles}>
        <Typography fontWeight={600} fontSize={16}>
          {t('project.description-title')}
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
          {i18n.language === LANGUAGES.en ? description : esDescription}
        </Typography>
      </div>

      <div className={styles.titles}>
        <Typography fontWeight={600} fontSize={16}>
          {t('project.pattern-design-title')}
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
          {patterns}
        </Typography>
      </div>
      <div className={styles.titles}>
        <Typography fontWeight={600} fontSize={16}>
          {t('project.stack-title')}
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
          {stack}
        </Typography>
      </div>

      <div className={styles.buttonContainer}>
        <Link to={github} target="_blank" aria-label="Navigate to Github">
          <GitHubIcon
            sx={{
              alignSelf: 'flex-end',
              fontSize: '3rem',
              color:
                mode === 'dark' ? secondaryExtraLight.main : secondaryDark.main,
            }}
          />
        </Link>

        <Link to={demoLink} target="_blank" aria-label="Demo">
          <OndemandVideoIcon
            sx={{
              alignSelf: 'flex-end',
              fontSize: '3rem',
              color:
                mode === 'dark' ? secondaryExtraLight.main : secondaryDark.main,
            }}
          />
        </Link>
      </div>
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
