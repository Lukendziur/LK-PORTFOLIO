import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants/constants';
import Layout from '../components/Layout/layout';


const router = () => {
return createBrowserRouter(
    [
        {
            element: <Layout/> ,
            errorElement: <h1>ERROR</h1>,
            children: [
              { path: ROUTES.HOME, element: <h1>home component</h1>, },
              {
                path: ROUTES.SKILLS,
                children: [
                  { index: true, element: <h1>SKILLS component</h1> }
                ]
              },
              {
                path: ROUTES.PROJECT,
                children: [
                  { index: true, element: <h1>PROJECT component</h1> },
                  {
                    path: ROUTES.PROJECT_DETAIL,
                    element: <h1>project dynamic component</h1>
                  }
        
                ]
              },
              {
                path: ROUTES.CONTACT,
                children: [
                  { index: true, element: <h1>CONTACT component</h1> }
        
                ]
              }
            ]
          },
        {
          path: '*',
          element: <h1>NOT FOUND</h1>// or try <Navigate to="/" />
        }
      ]
)
}
export default router;
