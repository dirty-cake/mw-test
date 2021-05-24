import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import clsx from 'clsx'

import AuthenticationForm from '../../components/AuthenticationForm'
import './styles.css'

const { REACT_APP_API_HOST: baseUrl } = process.env;

const Auth = ({ history, url, formType }) => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
  
  const handleOnchangeLoginInput = (e) => {
    setLogin(e.target.value)
  }

  const handleOnchangePasswodInput = (e) => {
    setPassword(e.target.value)
  }

  const auth = async () => {
    try {
      const response = await fetch(`${baseUrl}/${url}`, { 
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name: login, password: password })
      });
      const data = await response.json()

      if ([404, 422].includes(response.status)) {
        setError(data)
        return
      }

      if (response.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('expiration', data.expiration)
      }
      
      history.push('/articles')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="auth-form">
      <AuthenticationForm
        login={login}
        password={password}
        loginOnChange={handleOnchangeLoginInput}
        passwordOnChange={handleOnchangePasswodInput}
        error={error}
        onClick={auth}
        formType={formType}
      />

      <div className={clsx("error", {"show-error": error.error})}>
        {error.error && error.error}
      </div>

      <Link className="auth-link" to={formType === "signIn" ? '/signUp' : '/signIn'}>
        {formType === "signIn" ? "Don't you have an account? Sign Up" : "Do you have an account? Sign In"}
      </Link>

    </div>
  )
}

export default withRouter(Auth);