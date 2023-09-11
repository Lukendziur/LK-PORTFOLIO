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
    tabIndex: 1,
  },
  {
    path: '/about',
    routeName: 'About',
    i18: 'home.navbar-structure.about',
    icon: PsychologyRoundedIcon,
    tabIndex: 2,
  },
  {
    path: '/projects',
    routeName: 'Project',
    i18: 'home.navbar-structure.projects',
    icon: AccountTreeRoundedIcon,
    tabIndex: 3,
  },
  {
    path: '/contact',
    routeName: 'Contact',
    i18: 'home.navbar-structure.contact',
    icon: SendRoundedIcon,
    tabIndex: 4,
  },
];

export const LANGUAGES = Object.freeze({
  es: 'es',
  en: 'en',
});

export const BREAKPOINTS = Object.freeze({
  minMobile: '(max-width: 370px)',
  mobile: '(max-width: 768px)',
  tablet: '(max-width: 1024px)',
  desktop: '(min-width: 1025px)',
});
