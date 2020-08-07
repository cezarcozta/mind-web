import React from 'react';
import { RouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface IRoute extends RouteProps {
  isPrivate?: boolean;
  level?: number;
  component: React.ComponentType;
}

const Route: React.FC<IRoute> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
   <ReactDOMRoute 
    {...rest}
    
    render={() => {
      return isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{
          pathname: isPrivate ? '/' : '/admin-dashboard'}} 
        />
      )
    }}
  />
  );
};

export default Route;