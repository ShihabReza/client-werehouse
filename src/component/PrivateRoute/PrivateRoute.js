import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.int';

const PrivateRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  
  let location = useLocation();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }
  

  return children;
};

export default PrivateRoute;