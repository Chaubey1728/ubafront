import React, { useEffect } from 'react'
import Base from '../components/Base'
import { Card, CardBody, CardHeader, Container, FormGroup, Input, Label,  Button, Row, Col } from 'reactstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';



const SignUP = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const loggedin = localStorage.getItem('user');
    if (loggedin)
    {
    navigate('/')
    }
  
  }, )
  

  const collectData = async ()=> {
   
    let result = await fetch(
        "http://localhost:5000/register",{
        method:'post',
        body: JSON.stringify({name, email, password}),
        headers:{
            'Content-Type':'application/json',
            'Accecpt':'application/json'
        }
    });
    result= await result.json();
    
    localStorage.setItem("user",JSON.stringify(result.result))
    localStorage.setItem("token",JSON.stringify(result.auth))
    
    toast.success('Successfully Signed Up');
    navigate('/login')
}
  


  return (
    <Base>
            <Container>
            <Row className='mt-4'>
                <Col sm={{ size: 6, offset: 3}}>
                <Card color='dark' outline >
                <CardHeader className='bg-dark text-white'>
                    <h3>Get YourSelf Registered.</h3>
                </CardHeader>
                <CardBody className='bg-secondary text-white'>
                    <form  method='post'>
                        <FormGroup >
                            <Label  for="name">{<h5> Name:</h5>}</Label>
                            <Input type='text' placeholder='Enter Here' id='name'
                            value={name} onChange={(e)=> setName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label  for="email">{<h5> Email:</h5>}</Label>
                            <Input type='email' placeholder='Enter Here' id='email' 
                            value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">{<h5> Password:</h5>}</Label>
                            <Input type='password' placeholder='Enter Here' id='Password' name='password' 
                            value={password} onChange={(e)=> setPassword(e.target.value)}  />
                        </FormGroup>


                        <Container className='text-center'>

                            <Button onClick={collectData} type='button' color='success'>Register</Button>
                            <Button  color='danger' className='ms-2'>Reset</Button>

                        </Container>
                    </form>
                </CardBody>
                </Card>


                </Col>


            </Row>

        </Container>
        <ToastContainer />
    </Base>
  )
}

export default SignUP