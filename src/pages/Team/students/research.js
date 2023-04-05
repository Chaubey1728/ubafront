import React from 'react'
import Base from '../../../components/Base'
import Aakash from '../../../images/Students/Research/AAKASH.jpg'
import Aman from '../../../images/Students/Research/Aman.jpg'
import j from '../../../images/Students/Research/J.jpg'
import Kashish from '../../../images//Students/Research/Kashish.jpg'
import Prashant from '../../../images/Students/Research/Prashant.jpg'
import Raj from '../../../images/Students/Research/Raj.jpg'
import Samrity from '../../../images/Students/Research/Samrity.jpg'
import Tushar from '../../../images/Students/Research/Tushar.jpg'
import '../Css/Students.css'

function research() {
  return (
    <Base>
    <div>
    <center>
      <h1>Research Team Head</h1>
       <a className='researchHeadimg'>
         <img src={j} alt='img' />
         <h2>J Bhawna Kumari</h2>
      </a></center>
    </div>
    <br/>
    <hr/>
    <div>
      <p>
        <center><h1>Research Team</h1></center>
        <a className='researchimg'>
          <img src={Aakash} alt='' />
          <img src={Aman} alt='' />
          <img src={Kashish} alt='' />
          <img src={Prashant} alt='' />
          <img src={Raj} alt='' />
          <img src={Samrity} alt='' />
          <img src={Tushar} alt='' />
        </a>
      </p>
    </div>
    </Base>
  )
}

export default research
