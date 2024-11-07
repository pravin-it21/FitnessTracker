import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? ( // If authenticated, render the component
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> // If not authenticated, redirect to login
        )
      }
    />
  );
};

export default PrivateRoute;
