// External
import { createBrowserRouter } from 'react-router-dom';

// Internal
import { ROUTES } from '../constants/constants';
import Layout from '../components/Layout/Layout.jsx';
import Home from '../Pages/Home/Home';

const router = () => {
  return createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <h1>ERROR</h1>,
      children: [
        { path: ROUTES.HOME, element: <Home /> },
        {
          path: ROUTES.SKILLS,
          children: [{ index: true, element: <h1>SKILLS component</h1> }],
        },
        {
          path: ROUTES.PROJECT,
          children: [
            { index: true, element: <h1>PROJECT component</h1> },
            {
              path: ROUTES.PROJECT_DETAIL,
              element: <h1>project dynamic component</h1>,
            },
          ],
        },
        {
          path: ROUTES.CONTACT,
          children: [{ index: true, element: <h1>CONTACT component</h1> }],
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
