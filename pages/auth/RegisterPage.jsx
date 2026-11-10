import React from 'react'
import AuthForm from '../../src/components/AuthForm'

const RegisterPage = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
      <ul className='flex m-0 p-0 list-none'>
        <li>
          <AuthForm/>
        </li>
       
      </ul>
    </div>
  )
}

export default RegisterPage