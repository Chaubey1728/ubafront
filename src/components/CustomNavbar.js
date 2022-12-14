import { NavLink as Link, useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';


import React from 'react'
import { useState } from 'react';


export default function CustomNavbar() {

  const [isOpen,setIsOpen]=useState(false)
  const loggedin= localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div> 
      <Navbar color="dark" dark>
      <img 
       alt='logo'
       className='logo' 
       src='https://coer.ac.in/wp-content/uploads/2020/04/UBA-Reprot-20191224.jpg' />

        <NavbarBrand >
          <h1>Unnat Bharat Abhiyan</h1>
          <hr />
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar >
            <NavItem>

              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/about">About Us</NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/dashboard">My profile</NavLink>
            </NavItem>

            <NavItem>
            { loggedin ? <NavLink onClick={logout} tag={Link} to="/signup">Logout ({JSON.parse(loggedin).name}) </NavLink> 
             : <>
             <NavLink   tag={Link} to="/signup">SignUp</NavLink> 
             <NavLink tag={Link} to="/login">Login</NavLink>
             </>}
            </NavItem>



          </Nav>

        </Collapse>
      </Navbar>
    </div>
  )
}
