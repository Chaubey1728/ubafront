import React from 'react'
import CustomNavbar from './CustomNavbar';
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import './Css/Base.css'

export default function Base({title = "Welcome to our website ", children}) {
  const navigate = useNavigate();
  const goback = ()=> {
    navigate(-1);
  }
  return (
    <div className="container-fluid p-0 m-0">
        <CustomNavbar />
        <Button className='back-button' onClick={goback}>Back</Button>
        {children}
         
    </div>
  );
};