// External
import { createBrowserRouter } from 'react-router-dom';

// Internal
import { ROUTES } from '../constants/constants';
import Layout from '../components/Layout/Layout.jsx';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Project from '../Pages/Projects/ProjectDetail/Project';
import Projects from '../Pages/Projects/Projects';
import Contact from '../Pages/Contact/Contact';

const router = () => {
  return createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <h1>ERROR</h1>,
      children: [
        { path: ROUTES.HOME, element: <Home /> },
        {
          path: ROUTES.ABOUT,
          children: [{ index: true, element: <About /> }],
        },
        {
          path: ROUTES.PROJECT,
          children: [
            { index: true, element: <Projects /> },
            {
              path: ROUTES.PROJECT_DETAIL,
              element: <Project />,
            },
          ],
        },
        {
          path: ROUTES.CONTACT,
          children: [{ index: true, element: <Contact /> }],
        },
      ],
    },
    {
      path: '*',
      element: <h1>NOT FOUND</h1>, // or try <Navigate to="/" />
    },
  ]);
};
export default router;
