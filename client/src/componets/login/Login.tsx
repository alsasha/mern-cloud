import React, { useState } from 'react'
import './login.scss'
import Input from '../../utils/input/Input'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="login">
      <h2 className="title mb30">Login</h2>
      <Input
        type="mail"
        required={true}
        value={email}
        setValue={setEmail}
        className="mb30"
        placeholder="Your email..."
      />
      <Input
        type="password"
        required={true}
        value={password}
        setValue={setPassword}
        placeholder="Your password..."
      />
    </div>
  )
}

export default Login
