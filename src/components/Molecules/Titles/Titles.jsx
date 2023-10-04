// External
import {
  Chip,
  Divider,
  Skeleton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

// Internal
import { BREAKPOINTS } from '../../../constants/constants';
import { concatClassNames } from '../../../utils/utils';

// Styles
import styles from './Titles.module.scss';

const Titles = ({ initialTitle, principalTitle, description, className }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const [t] = useTranslation('global');
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);
  return (
    <div className={concatClassNames(styles.about, className)}>
      <Typography
        variant="h1"
        fontSize={24}
        maxWidth={isMobile ? 'initial' : 364}
      >
        {t(initialTitle)}
      </Typography>
      <Typography
        variant={initialTitle ? 'h2' : 'h1'}
        fontWeight={600}
        maxWidth={isMobile ? 'initial' : 435}
        fontSize={isMobile ? '4rem' : '6rem'}
      >
        {principalTitle ? (
          t(principalTitle)
        ) : (
          <Skeleton width={435} height={122} />
        )}
      </Typography>
      <Divider flexItem>
        <Chip icon={<ComputerRoundedIcon className={styles.icon} />} />
      </Divider>
      <Typography
        variant="h3"
        lineHeight={2}
        fontSize={isMobile ? 14 : 16}
        textAlign="justify"
        color={
          mode === 'light'
            ? 'var(--secondaryExtraDark)'
            : 'var(--secondaryExtraLight)'
        }
        fontWeight={400}
      >
        {t(description)}
      </Typography>
    </div>
  );
};

export default Titles;

Titles.propTypes = {
  initialTitle: PropTypes.string,
  principalTitle: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};
Titles.defaultProps = {
  initialTitle: '',
  principalTitle: '',
  description: '',
  className: '',
};
