import { createBrowserRouter } from 'react-router-dom';
import AboutUs from '../components/AboutUs/AboutUs';
import AvailablePuppies from '../components/AvailablePuppies/AvailablePuppies';
import ContactUs from '../components/ContactUs/ContactUs';
import GetMembership from '../components/GetMembership/GetMembership';
import Home from '../components/Home/Home';
import PetInsurance from '../components/PetInsurance/PetInsurance';
import Error from '../components/Shared/Error/Error';
import Login from '../components/Shared/Login/Login';
import Reset from '../components/Shared/Login/Reset';
import Signup from '../components/Shared/Login/Signup';
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
        path: '/petInsurance',
        element: <PetInsurance></PetInsurance>,
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
        path: '/getmembership',
        element: <GetMembership></GetMembership>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/reset',
        element: <Reset></Reset>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
]);
