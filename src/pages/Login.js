import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <h1>Welcome to my page, login</h1>
    <Link to="/profile"> Profile </Link>
    
    </>
  )
}

export {Login}