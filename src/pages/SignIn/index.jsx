import React from 'react'
import { withRouter } from "react-router-dom"

import Auth from '../../components/Auth'


const SignIn = () => {

  return (
    <Auth 
      url="auth/token"
      formType="signIn"
    />
  )
}

export default withRouter(SignIn);