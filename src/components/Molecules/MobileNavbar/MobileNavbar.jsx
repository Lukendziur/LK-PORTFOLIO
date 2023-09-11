import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './MobileNavbar.module.scss';
import { NAVBAR_STRUCTURE } from '../../../constants/constants';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MobileNavbar = () => {
  const [open, setOpen] = React.useState(false);
  const [t] = useTranslation('global');

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="open menu"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className={styles.manuButton}
      >
        <MoreVertIcon />
      </IconButton>
      {open && (
        <nav className={styles.mobileNavbar}>
          <ul className={styles.navbarCustomItem}>
            {NAVBAR_STRUCTURE.map((navItem) => (
              <li key={navItem.routeName}>
                <NavLink
                  aria-label={navItem.routeName}
                  to={navItem.path}
                  className={styles.link}
                  onClick={() => handleClose()}
                >
                  {t(navItem.i18)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};
export default MobileNavbar;
