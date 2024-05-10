import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
// import './signup.css'

const Signup = () => {
  
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email:'',
    name:'',
    password:'',
  })


  const handleChnage = (e) =>{
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/user/register',{
        method:'POST',
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(formData)
      })
      const result = await response.json();
      console.log(result)
      navigate('/login')
    } catch (error) {
      
    }
    finally{
      setFormData({
    email:'',
    name:'',
    password:'',
      })
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
              type = 'email'
              name = 'email'
              placeholder='Enter email'
              value = {formData.email}
              onChange={handleChnage}
          />
        </Form.Group>

        <Form.Group controlId='formBasicName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
              type = 'text'
              name = 'name'
              placeholder='Enter name'
              value={formData.name}
              onChange={handleChnage}
          />
        </Form.Group>

        
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
              type = 'password'
              name = 'password'
              placeholder='Enter password'
              value={formData.password}
              onChange={handleChnage}
          />
        </Form.Group>

        <Button variant='dark' type='submit' className='w-100'>
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Signup