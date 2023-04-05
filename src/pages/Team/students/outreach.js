import React from 'react'
import Base from '../../../components/Base'
import Aayush from '../../../images/Students/Outreach/Aayush.jpg'
import Anurag from '../../../images/Students/Outreach/Anurag.jpg'
import Deepika from '../../../images/Students/Outreach/Deepika.jpg'
import Dipti from '../../../images/Students/Outreach/Dipti.jpg'
import Hitakshi from '../../../images/Students/Outreach/Hitakshi.jpg'
import Pratiksha from '../../../images/Students/Outreach/Pratiksha.jpg'
import Rohan from '../../../images/Students/Outreach/Rohan.jpg'
import Sanjana from '../../../images/Students/Outreach/Sanjana.jpg'
import '../Css/Students.css'

function outreach() {
  return (
    <Base>
    <div>
      <p>
        <center><h1>Outreach</h1></center>
        <a className='posterimg'>
          <img src={Aayush} alt='img' />
          <img src={Deepika} alt='img' />
          <img src={Dipti} alt='img' />
          <img src={Hitakshi} alt='img' />
          <img src={Pratiksha} alt='img' />
          <img src={Rohan} alt='img' />
          <img src={Sanjana} alt='img' />
          <img src={Anurag} alt='img' />

        </a>
      </p>
    </div>
    </Base>
  )
}

export default outreach
