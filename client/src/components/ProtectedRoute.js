import React from 'react'
import { Navigate } from 'react-router-dom'

import Auth from '../utils/auth'

const ProtectedRoute = ({ children }) => {
  if (Auth.loggedIn()) {
    return children
  }
  return <Navigate to="login" />
}

export default ProtectedRoute
