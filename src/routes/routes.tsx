import React from 'react';
import { RouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface IRoute extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<IRoute> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();
  
  //console.log(isLevel);

  return (
   <ReactDOMRoute 
    {...rest}
    render={() => {

      // return isLevel === 1 ? (
      //   <Component />
      // ) : (
      //   <Component />
      // );
      return ' ' ? (
        <Component />
      ) : (
        <Redirect to={{
          pathname: !!user ? '/' : '/admin-dashboard'}} 
        />
      )
    }}
  />
  );
};

export default Route;