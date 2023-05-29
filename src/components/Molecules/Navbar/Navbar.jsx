// External
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { Button, IconButton, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Internal
import ColorModeContext from '../../../context/ColorModeContext/ColorModeContext';
import {
  BREAKPOINTS,
  LANGUAGES,
  NAVBAR_STRUCTURE,
} from '../../../constants/constants';

// Styles
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [t, i18n] = useTranslation('global');
  const theme = useTheme();
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);
  const colorMode = useContext(ColorModeContext);
  const { primaryDark, mode } = theme.palette;

  const setActiveLinkColor = (active) => {
    return { color: active && primaryDark.main };
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        {NAVBAR_STRUCTURE.map((navItem) => (
          <li key={navItem.routeName}>
            <NavLink
              aria-label={navItem.routeName}
              to={navItem.path}
              style={({ isActive }) => setActiveLinkColor(isActive)}
              className={styles.link}
            >
              {isMobile ? <navItem.icon fontSize="large" /> : t(navItem.i18)}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.actionsBar}>
        <Button
          size="large"
          aria-label="Change to Spanish"
          onClick={() => i18n.changeLanguage('es')}
          className={styles.buttons}
          aria-pressed={i18n.language === LANGUAGES.es}
        >
          ES
        </Button>
        <Button
          size="large"
          aria-label="Change to English"
          onClick={() => i18n.changeLanguage('en')}
          className={styles.buttons}
          aria-pressed={i18n.language === LANGUAGES.en}
        >
          EN
        </Button>

        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          aria-label="Change theme"
          color="inherit"
          className={styles.buttons}
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
