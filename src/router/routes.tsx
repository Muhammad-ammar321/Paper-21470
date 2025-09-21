import { createBrowserRouter } from 'react-router';
import HomePage from '../pages/home/HomePage';
import Signup from '../pages/signup/Signup';
import Ecommerce from '../pages/Product/Product';
import Login from '../pages/login/Login';
import DetailPage from '../pages/Product/DetailPage';  
import  isLoggedIn  from '../components/auth/isLogin';
import { Navigate } from 'react-router';

// Protected Route Component (Auth Guard)
const ProtectedRoute = ({ element }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/login" />;
  }
  return element;
};

export const routes = createBrowserRouter([
  {
    path: '/',
    element: 
    <HomePage />,
    children: [
      {
        path: '/',
        element:<ProtectedRoute element={<Ecommerce />}/> 
      },
      {
        path: 'product/:id',   
        element: <ProtectedRoute element={<DetailPage />} />,
      },
    ],
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);


