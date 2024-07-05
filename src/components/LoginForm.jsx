import React from 'react'
import logo from '../assests/images/download.jpeg'
import TextField from '@mui/material/TextField';
import { useGoogleLogin } from '@react-oauth/google';
import '../assests/css/style.css'
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { useForm } from "react-hook-form";
import * as yup from "yup"; 
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
    
        const { linkedInLogin } = useLinkedIn({
          clientId: '86vhj2q7ukf83q',
          redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
          onSuccess: (code) => {
            console.log(code);
          },
          onError: (error) => {
            console.log(error);
          },
        });
        const emailregex = `[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}`

        const schema = yup.object().shape({
      
          email: yup.string().required("Email is required").matches(emailregex,"Email is Invalid"),
          password: yup.string().required("Password is required"),
      
      
        })
        const { register, handleSubmit, getValues, formState: { errors } } = useForm({
          resolver: yupResolver(schema),
          defaultValues: {
         
            email: "",
            password: "",
         
          },
        })
        const HandleLogin=()=>{
        
        }
  return (
    <div className='col-12'>
      <img src={logo} alt="" style={{width:"90px"}} className='logo'/>
      <div className="col-12 d-bloch d-lg-flex social">
        <button className='btn btn-primary col-lg-6 col-12' onClick={login}><i class="fa-brands fa-google"></i></button>
        <button className='btn btn-primary col-lg-6 col-12'onClick={linkedInLogin}><i class="fa-brands fa-linkedin"></i></button>
      </div>
      <div className="col-12 d-flex">
        <div className="col-4 "><hr/></div>
        <div className="col-4 text-center">or sign in using</div>
        <div className="col-4" ><hr/></div>
      </div>
      <form onSubmit={handleSubmit(HandleLogin)}>

      <div className="col-12">
      <div className="form-group d-block">
                <TextField id="standard-basic"  variant="standard" label='Email' className='col-12 '{...register("email")}  />
                <span className="error">{errors.email?.message}</span>
            </div>
      <div className="form-group d-block">
                <TextField id="standard-basic" type='password' variant="standard" label='Password' className='col-12 ' {...register("password")} />
                <span className="error">{errors.password?.message}</span>
            </div>
            <button className='login-button col-12 btn' type='submit'>LOG IN</button>
      </div>
      </form>
    </div>
  )
}

export default LoginForm
