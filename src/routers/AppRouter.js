import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';

import { createBrowserHistory } from "history";
import DashBoard from '../components/DashBoard';
import ProductPage from '../components/ProductPage';
import CategoryPage from '../components/Category';
import GenrePage from '../components/Genres';
import OrdersPage from '../components/Orders';
import SignUp from '../components/Auth/SignUp';
import Login from '../components/Auth/Login';
import RecoverPassword from '../components/Auth/RecoverPassword';

//switch ensures only the first match is rendered
export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Routes> 
        <Route path="/login" element={<Login />} exact={true} key="newlabeltvlogin"/>
        <Route path="/signup" element={<SignUp />} exact={true} key="newlabeltvsignup"/>
        <Route path="/" element={<Login />} exact={true} key="newlabeltv"/>
        <Route path="/recover" element={<RecoverPassword />} exact={true} key="newlabeltvrecover"/>
        <Route path="/home" element={<DashBoard />} exact={true} key="newlabeltvhome"/>
        <Route path="/product" element={<ProductPage />} exact={true} key="newlabeltvproduct"/>
        <Route path="/category" element={<CategoryPage />} exact={true} key="newlabeltvcategory"/>
        <Route path="/genre" element={<GenrePage />} exact={true} key="newlabeltvgenre"/>
        <Route path="/orders" element={<OrdersPage />} exact={true} key="newlabeltvorders"/>
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
