import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(Component)
  console.log(rest)
  return (
    <Consumer>
      { context => (
        <Route
          {...rest}
          render={rest => context.authenticatedUser ? (
              <Component {...rest} />
            ) : (
              <Redirect to={{
                pathname: '/signin',
                state: { from: rest.location }
              }} />
            )
          }
        />
      )}
    </Consumer>
  );
};

export default PrivateRoute;