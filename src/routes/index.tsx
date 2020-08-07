import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import SignIn from '../pages/SignIn';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ SignIn }/>
      <Route path="/signup" exact component={ SignUp }/>
      <Route path="/admin-dashboard" exact component={ AdminDashboard } isPrivate />
      <Route path="/user-dashboard" exact component={ UserDashboard } isPrivate />
    </Switch>
  );
};

export default Routes;