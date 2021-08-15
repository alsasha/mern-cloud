import React from "react"
import { inputProps as props } from '../../interfaces'
import './input.scss'

const Input = (props:props) => {
  const {
    type,
    required = false,
    value,
    setValue,
    className = '',
    placeholder = ''
  } = props

  return (
    <input
      className={`input ${className}`}
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default Input
