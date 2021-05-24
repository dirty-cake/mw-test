import React from 'react'

import Input from '../Input'
import Button from '../Button'

const AuthenticationForm = ({ login, password, loginOnChange, passwordOnChange, error, onClick, formType }) => {

  return (
    <>
      <Input 
        placeholder="Login" 
        label="Put your login" 
        type="text" 
        value={login} 
        onChange={loginOnChange} 
        error={error.name && error.name} 
      />
      <Input 
        placeholder="Password" 
        label="Put your password" 
        type="password" 
        value={password} 
        onChange={passwordOnChange} 
        error={error.password && error.password}
      />
      <Button label={formType === "signIn" ? "Sign in" : "Sign up"} onClick={onClick} disabled={!login || !password} />
    </>
  )
}

export default AuthenticationForm;