import React from 'react';
import { RouteProps, Route as ReactDOMRoute } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from '../pages/UserDashboard';

import SignIn from '../pages/SignIn';

interface IRoute extends RouteProps {
  level?: number;
  component: React.ComponentType;
}

const Route: React.FC<IRoute> = ({ level = 0, component: Component, ...rest }) => {
  const {user} = useAuth();

  return (
   <ReactDOMRoute 
    {...rest}
    render={() => {
      if(!user) return <Component />;

      if(!!user && level === 999) return <AdminDashboard />;

      if(!!user && level === 1) return <UserDashboard />;

      if(!user && !level) return <SignIn />;
    }}
  />
  );
};

export default Route;