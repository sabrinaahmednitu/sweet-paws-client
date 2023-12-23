import { createBrowserRouter } from 'react-router-dom';
import AboutUs from '../components/AboutUs/AboutUs';
import AvailablePuppies from '../components/AvailablePuppies/AvailablePuppies';
import ContactUs from '../components/ContactUs/ContactUs';
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
        path: '/availablepuppies',
        element: <AvailablePuppies></AvailablePuppies>,
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/contactus',
        element: <ContactUs></ContactUs>,
      },
      {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
]);
