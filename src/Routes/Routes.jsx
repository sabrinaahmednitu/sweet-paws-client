import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Error from '../components/Shared/Error/Error';
import Main from '../Layout/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
]);
