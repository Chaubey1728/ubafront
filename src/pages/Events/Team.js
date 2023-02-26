import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Base from '../../components/Base'
import "./Css/Team.css"

function Team() {
  return (<Base>
<center><h1>EVENTS</h1></center>
<ol>
  <li ><Button className='yr21'  tag={Link} to='/yr21' >Year-2021</Button></li><br />
  <li className='yr22' ><Button tag={Link} to='/yr22' >Year-2022</Button></li><br />
  <li className='yr23' ><Button tag={Link} to='/yr23' >Year-2023</Button></li><br />
</ol>
  </Base>
  )
}

export default Team
