import React, { useCallback, useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import SignIn from '../pages/SignIn';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';
import SignUp from '../pages/SignUp';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
 const { user } = useAuth();

  return (
    <Switch>
      <Route path="/" exact component={ SignIn }/>
      <Route path="/signup" exact component={ SignUp }/>
      <Route path="/admin-dashboard" exact component={ AdminDashboard } />
      <Route path="/user-dashboard" exact component={ UserDashboard }   />
    </Switch>
  );
};

export default Routes;