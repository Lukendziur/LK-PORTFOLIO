// External
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

// Styles
import styles from './CodeLinks.module.scss';

const CodeLinks = ({ github, demoLink }) => {
  const theme = useTheme();

  const { mode, secondaryDark, secondaryExtraLight } = theme.palette;
  return (
    <div className={styles.linksContainer}>
      {github && (
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
      )}

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
  );
};

export default CodeLinks;

CodeLinks.propTypes = {
  demoLink: PropTypes.string,
  github: PropTypes.string,
};
