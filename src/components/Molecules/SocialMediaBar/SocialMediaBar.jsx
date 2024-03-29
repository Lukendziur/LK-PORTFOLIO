// External
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Internal
import { LANGUAGES } from '../../../constants/constants';
import { concatClassNames } from '../../../utils/utils';

// Styles
import styles from './SocialMediaBar.module.scss';

const SocialMediaBar = ({ className }) => {
  const { t, i18n } = useTranslation('global');

  const enCV =
    'https://drive.google.com/file/d/19r0dMXunIogfnG5ODewuqo0o-Ze9sJS3/view?usp=sharing';
  const esCV =
    'https://drive.google.com/file/d/1Q6d3BuiaHzTnOS5feJuqZ5Zj2Wr-F0O7/view?usp=sharing';
  return (
    <div className={concatClassNames(styles.bar, className)}>
      <Tooltip title={t('globals.tooltip-linkedin')} placement="right">
        <IconButton
          aria-label="Navigate to Linkedin Lucila profile"
          size="large"
          className={styles.button}
        >
          <Link
            to="https://www.linkedin.com/in/lucilavkendziur/"
            target="_blank"
            className={styles.link}
            aria-label="Navigate to Linkedin Lucila profile"
          >
            <LinkedInIcon />
          </Link>
        </IconButton>
      </Tooltip>
      <Tooltip title={t('globals.tooltip-download-cv')} placement="right">
        <IconButton
          aria-label="Download Lucila resume"
          size="large"
          className={styles.button}
        >
          <Link
            to={i18n.language === LANGUAGES.en ? enCV : esCV}
            target="_blank"
            className={styles.link}
            aria-label="Download Lucila resume"
          >
            <DownloadRoundedIcon />
          </Link>
        </IconButton>
      </Tooltip>
      <Tooltip title={t('globals.tooltip-email')} placement="right">
        <IconButton
          aria-label="Send me an email"
          size="large"
          className={styles.button}
        >
          <Link
            to={'mailto:lukendziur@gmail.com'}
            target="_blank"
            className={styles.link}
            aria-label="Send me an email"
          >
            <EmailIcon />
          </Link>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default SocialMediaBar;
SocialMediaBar.propTypes = {
  className: PropTypes.string,
};
