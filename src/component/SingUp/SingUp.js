import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {  useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.int';

import GoogleLogin from '../GoogleLogin/GoogleLogin';

const SingUp = () => {
    const navigate = useNavigate()
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const emailRef = useRef('')
    const passwordRef = useRef('')
    
    if(user){
       navigate('/')
    }
    

    const handelSubmit = (event) =>{
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
       
       
        createUserWithEmailAndPassword(email,password)
    }
    
   
    return (
        <div className="w-50 mx-auto mt-5">
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    SingUp
                </Button>
                </Form>
                <p>Don't have an account? <span><Link className='text-decoration-none' to='/Login'>Login</Link></span> </p>
                <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default SingUp;