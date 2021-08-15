import React, { useState } from 'react'
import './registration.scss'
import Input from '../../utils/input/Input'
import {registration} from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="registration">
      <h2 className="title mb30">Registration</h2>
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

        <button
            className="btn mt30"
            onClick={() => registration(email, password)}
        >Sign in</button>
    </div>
  )
}

export default Registration
