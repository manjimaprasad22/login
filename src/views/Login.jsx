import React from 'react'
import LoginBanner from '../components/LoginBanner'
import LoginForm from '../components/LoginForm'
import '../assests/css/style.css'
import '../assests/css/responsive.css'

const Login = () => {
  return (
    <div className='container d-flex full-login'>
      <div className="col-6 d-none d-lg-block">
        <LoginBanner/>
      </div>
      <div className="col-12 col-lg-6 detail">
        <LoginForm/>
      </div>
    </div>
  )
}

export default Login
