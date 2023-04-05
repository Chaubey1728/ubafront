import React from 'react'
import Base from '../../../components/Base'
import Amit from '../../../images/Students/Data/Amit.jpg'
import Nivi from '../../../images/Students/Data/nivedita.jpg'
import Niti from '../../../images/Students/Data/Niti.jpg'
import Ankit from '../../../images/Students/Data/Ankit.jpg'
import Prashant from '../../../images/Students/Data/Prashant.jpg'
import Punit from '../../../images/Students/Data/Punit.jpg'
import Rejuvanth from '../../../images/Students/Data/Rejuvanth.jpg'
import Tushar from '../../../images/Students/Data/Tushar.jpg'
import Yogesh from '../../../images/Students/Data/Yogesh.jpg'
import Yash from '../../../images/Students/Data/yash.jpg'
import '../Css/Students.css'

function dataentry() {
  return (
    <Base>
    <div>
      <center>
        <h1>Data Entry Head</h1>
      <a className='dataheadimg'>
          <img src={Nivi} alt='img' />
          <h2>Nivedita Mishra</h2>
      </a>
      </center>
    </div>
    <br/>
    <hr/>
    <br/>
        <div>
      <p>
        <center><h1>Data Entry Team</h1></center>
        <a className='dataimg'>
          <img src={Amit} alt='img' />
          <img src={Niti} alt='img' />
          <img src={Ankit} alt='img' />
          <img src={Prashant} alt='img' />
          <img src={Punit} alt='img' />
          <img src={Rejuvanth} alt='img' />
          <img src={Tushar} alt='img' />
          <img src={Yogesh} alt='img' />
          <img src={Yash} alt='img' />

        </a>
      </p>
    </div>
    </Base>
  )
}

export default dataentry
