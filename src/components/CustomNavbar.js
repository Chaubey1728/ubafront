import { NavLink as Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


import React from 'react'
import { useState } from 'react';


export default function CustomNavbar() {

  const [isOpen,setIsOpen]=useState(false)

  return (
    <div> 
      <Navbar className='navbar' color='dark' dark>
      <img 
       alt='logo'
       className='logo' 
       src='https://coer.ac.in/wp-content/uploads/2020/04/UBA-Reprot-20191224.jpg' />

        <NavbarBrand className='nav-head' >
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
              <NavLink tag={Link} to="/team">Events</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                UBA Team
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to='/faculty' >Faculty</DropdownItem>
                <DropdownItem tag={Link} to='/students'>Students</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Villages
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className='bg-warning' tag={Link} to='/Bhati' >Bhati Mines</DropdownItem>
                <DropdownItem className='bg-warning' tag={Link} to='/chandan' >Chandan Hola</DropdownItem>
                <DropdownItem className='bg-warning' tag={Link} to='/rajpur' >Rajpur Khurd</DropdownItem>
                <DropdownItem className='bg-warning' tag={Link} to='/satbari' >Satbari</DropdownItem>
                <DropdownItem className='bg-warning' tag={Link} to='/sultanpur'>Sultanpur</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink tag={Link} to="/about">Contact Us</NavLink>
            </NavItem>

{/*
            <NavItem>
            { loggedin ? <NavLink onClick={logout} tag={Link} to="/signup">Logout ({JSON.parse(loggedin).name}) </NavLink> 
             : <>
             <NavLink   tag={Link} to="/signup">SignUp</NavLink> 
             <NavLink tag={Link} to="/login">Login</NavLink>
             </>}
            </NavItem>
            */}



          </Nav>

        </Collapse>
      </Navbar>
    </div>
  )
}
