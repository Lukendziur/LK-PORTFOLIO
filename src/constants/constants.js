export const ROUTES = Object.freeze({
  HOME: '/',
  SKILLS: '/skills',
  PROJECT: '/projects',
  PROJECT_DETAIL: ':id',
  CONTACT: '/contact',
});

export const NAVBAR_STRUCTURE = [
  {
    path: '/',
    routeName: 'Home',
    i18: 'home.navbar-structure.home',
  },
  {
    path: '/skills',
    routeName: 'Skills',
    i18: 'home.navbar-structure.skills',
  },
  {
    path: '/projects',
    routeName: 'Project',
    i18: 'home.navbar-structure.projects',
  },
  {
    path: '/contact',
    routeName: 'Contact',
    i18: 'home.navbar-structure.contact',
  },
];

export const LANGUAGES = Object.freeze({
  es: 'es',
  en: 'en',
});
