import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, user, redirectTo = "/login" }) => {
  return user ? children : <Navigate to={redirectTo} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object,
  redirectTo: PropTypes.string
};

export default ProtectedRoute;
