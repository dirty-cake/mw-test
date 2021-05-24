import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const seconds = Math.round(new Date() / 1000)
      const expiration = localStorage.getItem('expiration')
      
      if (expiration > seconds) {
        return <Component {...props} />
      }
      
      localStorage.removeItem('token')
      localStorage.removeItem('expiration')
      
      return (
        <Redirect
          to={{
            pathname: '/signIn',
            state: { from: props.location }
          }}
        />
      )
    }}
  />
);