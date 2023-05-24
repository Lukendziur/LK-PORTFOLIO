// External
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
// Internal

// Styles
import styles from './Navbar.module.scss';
import { Button } from '@mui/material';
const Navbar = () => {
    const [t, i18n] = useTranslation('global');

    const theme = useTheme();
    const navbarStyles = {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primaryDark.main,
        color: theme.palette.secondaryExtraLight.main
    };

  return (
    <navbar className={styles.navbar} style={navbarStyles}>
        <ul>
            <li>{t('home.navbar-structure.home')}</li>
            <li>{t('home.navbar-structure.skills')}</li>
            <li>Projects</li>
            <li>Contact</li>

            <Button onClick={() => i18n.changeLanguage('es')}>ES </Button>
            <Button onClick={() => i18n.changeLanguage('en')}>En </Button>



        </ul>



    </navbar>
  )
}

export default Navbar