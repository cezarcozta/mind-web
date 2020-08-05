import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Login }/>
      <Route path="/signin" component={ SignIn }/>
      <Route path="/admin-dashboard" exact component={ AdminDashboard }/>
      <Route path="/user-dashboard" exact component={ UserDashboard }/>
    </BrowserRouter>
  );
};

export default Routes;