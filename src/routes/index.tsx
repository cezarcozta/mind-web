import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import SignIn from '../pages/SignIn';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';
import SignUp from '../pages/SignUp';
import { useAuth } from '../hooks/auth';


const Routes: React.FC = () => {
  const {level} = useAuth();

  return (
    <Switch>
      <Route path="/" exact component={ SignIn }/>
      <Route path="/signup" component={ SignUp }/>
      <Route path="/admin-dashboard" component={ AdminDashboard } level={Number(level)} />
      <Route path="/user-dashboard" component={ UserDashboard }  level={Number(level)} />
    </Switch>
  );
};

export default Routes;