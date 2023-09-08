// External
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export const ROUTES = Object.freeze({
  HOME: '/',
  ABOUT: '/about',
  PROJECT: '/projects',
  PROJECT_DETAIL: ':id',
  CONTACT: '/contact',
});

export const NAVBAR_STRUCTURE = [
  {
    path: '/',
    routeName: 'Home',
    i18: 'home.navbar-structure.home',
    icon: HomeRoundedIcon,
  },
  {
    path: '/about',
    routeName: 'About',
    i18: 'home.navbar-structure.about',
    icon: PsychologyRoundedIcon,
  },
  {
    path: '/projects',
    routeName: 'Project',
    i18: 'home.navbar-structure.projects',
    icon: AccountTreeRoundedIcon,
  },
  {
    path: '/contact',
    routeName: 'Contact',
    i18: 'home.navbar-structure.contact',
    icon: SendRoundedIcon,
  },
];

export const LANGUAGES = Object.freeze({
  es: 'es',
  en: 'en',
});

export const BREAKPOINTS = Object.freeze({
  mobile: '(max-width: 768px)',
  tablet: '(max-width: 1024px)',
  desktop: '(min-width: 1025px)',
});
