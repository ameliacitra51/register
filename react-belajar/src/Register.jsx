import axios from 'axios';
import { Input } from 'postcss';
import React, { useState } from 'react';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleChange = (event) => {
    setValues({...values, [event.target.name]:[event.target.value]})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5173/register', values)
    .then(res => console.log("Registered Succesfully!!"))
    .catch(err => console.log(err));
  }
  return (
    <div className='d flex w-100 vh-100 bg-primary justify-center alignt-items-center'>
      <div className='bg-white p-3 rounded w-25'>
        <h2> Register</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='name'><strong>Name</strong></label>
                <Input type="text" placeholder="Enter Name" name="name" className="form-control rounded-0" onChange={handleChange}></Input>
            </div>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <Input type="email" placeholder="Enter Email" name="email" className="form-control rounded-0" onChange={handleChange}></Input>
            </div>
            <div className='mb-3'>
                <label htmlFor='password'><strong>Password</strong></label>
                <Input type="password" placeholder="Enter Password" name="password" className="form-control rounded-0" onChange={handleChange}></Input>
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'> Register</button>
            <p>You are agree to aour terms and policies</p>
            <a to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"></a>
        </form>
      </div>
    </div>
  )
}

export default Register;
