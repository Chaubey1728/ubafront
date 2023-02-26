import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label, Button, Row, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom';


function Login() {

    useEffect(() => {
        const loggedin = localStorage.getItem('user');
        if (loggedin)
        {
            navigate('/')
        }

    }, )
    

const navigate = useNavigate();    

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleLogin= async ()=>{
    let result = await fetch("http://localhost:5000/login",{
        method:'post',
        body:JSON.stringify({email, password}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result = await result.json();
    
    if (result.auth){
        
        localStorage.setItem('user',JSON.stringify(result.user));
        localStorage.setItem('token',JSON.stringify(result.auth));

        navigate('/dashboard')
    }else{
        alert("Please enter correct details")
    }
}

  return (
    <Base>
        <Container>
        <Row className='mt-4'>
            <Col sm={{ size: 6, offset: 3}}>
            <Card color='primary' outline >
            <CardHeader className='bg-primary text-white'>
                <h3>Login.</h3>
            </CardHeader>
            <CardBody className='bg-light text-dark'>
                <form >
                    <FormGroup>
                        <Label  for="email">{<h5> Email:</h5>}</Label>
                        <Input type='email' placeholder='Enter Here' id='email' 
                        onChange={(e)=>setEmail(e.target.value)} value={email} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">{<h5> Password:</h5>}</Label>
                        <Input type='password' placeholder='Enter Here' id='Password' name='password'
                        onChange={(e)=>setPassword(e.target.value)} value={password} />
                    </FormGroup>
   
                    <Container className='text-center'>

                        <Button onClick={handleLogin} color='success'>Login</Button>


                    </Container>
                </form>
            </CardBody>
            </Card>


            </Col>


        </Row>

    </Container>
    
    </Base>
  )
}

export default Login
