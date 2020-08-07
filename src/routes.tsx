import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import SignUp from './pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ SignIn }/>
      <Route path="/signup" component={ SignUp }/>
      <Route path="/admin-dashboard" exact component={ AdminDashboard }/>
      <Route path="/user-dashboard" exact component={ UserDashboard }/>
    </Switch>
  );
};

export default Routes;