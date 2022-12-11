import React from 'react';
import { useState, useEffect } from 'react';

const Register = () => {
    const [ state, setState ] = useState({
        name : "",
        age : 0,
        email : "",
        password : "",
        confirmPassword : ""
    });

    const onChange = (e) =>{
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const { name, age, email, password, confirmPassword } = state;

    const RegisterUser = (e) => {
        e.preventDefault()
        
    }

  return (
    <div className='h-auto w-6/12  flex flex-col items-center'  >
        <div>
        <div className='text-xl' >Register</div>
            <form   id='Registeration Form' onSubmit={RegisterUser} >
                <label>Name</label>
                <br/>
                <input className='text-white p-1' 
                    onChange={onChange}
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    required
                />
                
                <br/><br/>

                <label>Age</label>
                <br/>
                <input className='text-white p-1' 
                    onChange={onChange}
                    type='number'
                    placeholder='Age'
                    name='age'
                    value={age}
                    required
                />

                <br/><br/>

                <label>Email</label>
                <br/>
                <input className='text-white p-1'
                onChange={onChange}
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                    />

                <br/><br/>
                
                <label>Password</label>
                <br/>
                <input className='text-white p-1' 
                    onChange={onChange}
                    type='text'
                    placeholder='Password'
                    name='password of atleast 6 characters'
                    value={password}
                    required
                />
                <br/><br/>
                <label>Comfirm Password</label>
                <br/>
                <input className='text-white p-1' 
                    onChange={onChange}
                    type='text'
                    placeholder='Re-enter password'
                    name='confirmPassword'
                    value={confirmPassword}
                    required
                />
                <br/><br/>
                <div className='border-solid border-2 border-red-500 p-0.5 rounded-lg w-24 text-center 	bg-red-700' >
                    <input type="submit" value="Register" />
                </div>
            </form>

        </div>    
    </div>
  )
}

export default Register