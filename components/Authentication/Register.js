import React from 'react';
import { useState, useEffect } from 'react';
import RegisterSchema from '../../validations/register';

const Register = () => {
    const [ state, setState ] = useState({
        name : "",
        age : 0,
        email : "",
        mobile: "",
        password : "",
        confirmPassword : ""
    });

    const onChange = (e) =>{
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const { name, age, email, mobile, password, confirmPassword } = state;

    const RegisterUser = (e) => {
        e.preventDefault()
        try{
            const val = RegisterSchema.validate(state);
            console.log(val);
        }catch{
            if(state.password !== state.confirmPassword){
                console.log("password mismatch");
            }
        }
    }

  return (
    <div className='h-auto w-9/12 bg-yellow-300 p-4 flex flex-col items-center'  >
        <div>
        <div className='text-3xl font-bold text-red-700' >Register</div>
            <form   id='Registeration Form' onSubmit={RegisterUser} >
                <label>Name</label>
                <br/>
                <input className='text-white p-1 w-72' 
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
                    min={18}
                    max={65}
                    required
                />

                <br/><br/>

                <label>Email</label>
                <br/>
                <input className='text-white p-1 w-72'
                onChange={onChange}
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                    />

                <br/><br/>

                <label>Mobile</label>
                <br/>
                <input className='text-white p-1 w-72'
                onChange={onChange}
                type='text'
                placeholder='Moile Number'
                name='mobile'
                value={mobile}
                    />

                <br/><br/>
                
                <label>Password</label>
                <br/>
                <input className='text-white p-1 w-72' 
                    onChange={onChange}
                    type='text'
                    placeholder='password of atleast 6 characters'
                    name='password'
                    value={password}
                    required
                />
                <br/><br/>

                <label>Comfirm Password</label>
                <br/>
                <input className='text-white p-1 w-72' 
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