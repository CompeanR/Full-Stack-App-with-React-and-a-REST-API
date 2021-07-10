// Import statements
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Consumer } from './Context';

// Stateless component that generates a private route
const PrivateRoute = ({ component: Component, ...rest }) => {
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