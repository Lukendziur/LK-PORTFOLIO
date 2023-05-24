// External
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { Button, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Internal
import ColorModeContext from '../../../context/ColorModeContext/ColorModeContext';
import { LANGUAGES, NAVBAR_STRUCTURE } from '../../../constants/constants';

// Styles
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [t, i18n] = useTranslation('global');

  const theme = useTheme();
  const { primaryDark } = theme.palette;
  const colorMode = useContext(ColorModeContext);

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
              {t(navItem.i18)}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.translationButtons}>
        <Button
          size="large"
          aria-label="Change to Spanish"
          onClick={() => i18n.changeLanguage('es')}
          variant={i18n.language === LANGUAGES.es ? 'contained' : ''}
        >
          ES
        </Button>
        <Button
          size="large"
          aria-label="Change to English"
          onClick={() => i18n.changeLanguage('en')}
          variant={i18n.language === LANGUAGES.en ? 'contained' : ''}
        >
          EN
        </Button>

        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          aria-label="Change theme"
          color="inherit"
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
