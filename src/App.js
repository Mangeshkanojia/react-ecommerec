// import { Counter } from './features/counter/Counter';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Singup from './pages/SingupPage';
import ProductsDetailsPage from './pages/ProductsDetailsPage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Protected from './features/Auth/components/Protected';
import { useEffect } from 'react';
import { fetchItemsByUserIdAsync } from './features/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/Auth/authSlice';
import Pagesnotfound from './pages/Pagesnotfound';
import OrderSuccessPages from './pages/OrderSuccessPages';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Protected> <Home/></Protected>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
     path: "/signup",
     element: <Singup/>
  },
  {
    path: "/cart",
    element: <Protected><CartPage/></Protected>
 },
 {
  path: "/checkout",
  element: <Protected><CheckoutPage/></Protected>
},
{
  path: "/product-detail/:id",
  element: <Protected><ProductsDetailsPage></ProductsDetailsPage></Protected>
},
{
  path: "/order-success/:id",
  element: <OrderSuccessPages></OrderSuccessPages>
},
{
  path: "*",
  element: <Pagesnotfound></Pagesnotfound>
},
]);

function App() {
  const dispatch =useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(()=>{
    if(user){
      dispatch(
        fetchItemsByUserIdAsync(user.id)
      );
    }
  },[dispatch,user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
