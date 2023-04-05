import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../../components/Base'

function Students() {
  return (
    <Base>
    <div>
      <Link tag={Link} to="/core"> <center><h3>Core Team</h3></center> </Link>
      <img src='' alt='' />
    </div>
    <div>
    <Link tag={Link} to="/outreach"> <center><h3>Outreach Team</h3></center> </Link>
      <img src='' alt='' />
    </div>
    <div>
    <Link tag={Link} to="/media"> <center><h3>Media Team</h3></center> </Link>
      <img src='' alt='' />
    </div>
    <div>
    <Link tag={Link} to="/data"> <center><h3>Data Entry Team</h3></center> </Link>
      <img src='' alt='' />
    </div>
    <div>
    <Link tag={Link} to="/research"> <center><h3>Research Team</h3></center> </Link>
      <img src='' alt='' />
    </div>
    </Base>
  )
}

export default Students
