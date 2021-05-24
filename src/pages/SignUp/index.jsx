import React from 'react'
import { withRouter } from "react-router-dom"

import Auth from '../../components/Auth'

const SignUp = () => {

  return (
    <Auth 
      url="auth/register"
      formType="signUp"
    />
  )
}

export default withRouter(SignUp);