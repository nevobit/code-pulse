import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loader from 'components/shared/Loader'
import React, { ComponentType } from 'react'
import { Route } from 'react-router-dom'

interface ProtectedRouteProps {
    component: ComponentType;
    [key: string]: any;
}

const ProtectedRoute = ({component, ...args}: ProtectedRouteProps) => {
  return (
    <div>
    </div>
  )
}

export default withAuthenticationRequired(ProtectedRoute, {
    onRedirecting: () => <Loader />,
  });
