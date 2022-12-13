import React from 'react'
import { useState, useEffect } from 'react'
import LoginSchema from '../../validations/login'
import { API_URL } from '../../Utils/url'
import Swal from 'sweetalert2'

const Login = () => {

  const [ state, setState ] = useState({
    email : "",
    password : "",
  });

const onChange = (e) =>{
    setState({ ...state, [e.target.name]: e.target.value });
}

const {email, password, } = state;
// let url = API_URL + "/sign_in"

const LoginUser = async(e) => {
  e.preventDefault()
  try{
      const val = LoginSchema.validate(state);
      console.log(val);
      
      if(val.error){
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error While filling form'
            })
      }
  }catch(e){
      console.log(e);
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Oops Some Error Occured'
        })
  }

  const response = await fetch(`${API_URL}/sign_in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  const data = await response.json()
      console.log(data);
      let token = "bearer" + data.token
  if (data.status === 200) {
    localStorage.setItem('token', token)
    localStorage.setItem('username', data.data.username)
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'You have been Logged in, Continue to dashboard',
      showConfirmButton: false,
      timer: 1500
  })
    
    window.location.href = '/dashboard'
  } else {
    // alert('Please check your username and password')
          setMessage("Please check your username and password")
  }

}

  return (
    <div className='h-auto w-full md:w-9/12 bg-yellow-300 p-4 flex flex-col items-center'  >
        <div>
        <div className='md:text-3xl font-bold text-red-700' >Login</div>
            <form   id='Registeration Form' onSubmit={LoginUser} >

                <label>Email</label>
                <br/>
                <input className='text-white p-1 w-auto md:w-72'
                onChange={onChange}
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                    />

                <br/><br/>
                
                <label>Password</label>
                <br/>
                <input className='text-white p-1 w-auto md:w-72' 
                    onChange={onChange}
                    type='text'
                    placeholder='password of atleast 6 characters'
                    name='password'
                    value={password}
                    required
                />


                <br/><br/>
                <div className='border-solid border-2 border-red-500 p-0.5 rounded-lg w-24 text-center 	bg-red-700' >
                    <input type="submit" value="Login" />
                </div>
            </form>

        </div>    
    </div>
  )
}

export default Login