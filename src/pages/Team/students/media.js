import React from 'react'
import Base from '../../../components/Base'
import Saloni from '../../../images/Students/Content/Saloni.jpg'
import Sneha from '../../../images/Students/Content/Sneha.jpg'
import Sudipa from '../../../images/Students/Content/Sudipa.jpg'
import Harshit from '../../../images/Students/Poster/Harshit.jpg'
import SnehaS from '../../../images/Students/Poster/SnehaS.jpg'
import Rinee from '../../../images/Students/Poster/Rinee.jpg'
import Rimjhim from '../../../images/Students/Poster/Rimjhim.jpg'
import Sachin from '../../../images/Students/Poster/Sachin.jpg'
import Shruti from '../../../images/Students/Poster/Shruti.jpg'
import Ritik from '../../../images/Students/Poster/Ritik.jpg'
import S from '../../../images/Students/Poster/S.jpg'
import '../Css/Students.css'

function media() {
  return (
    <Base>
    <div>
      <p>
        <center><h1>Content</h1></center>
        <a className='contentimg'>
          <img src={Saloni} alt='img' />
          <img src={Sneha} alt='img' />
          <img src={Sudipa} alt='img' />
        
        </a>
      </p>
    </div>
    <br/>
    <hr/>
    <br/>
    <div>
      <p>
        <center><h1>Poster</h1></center>
        <a className='posterimg'>
          <img src={Harshit} alt='img' />
          <img src={Rinee} alt='img' />
          <img src={Ritik} alt='img' />
          <img src={S} alt='img' />
          <img src={Sachin} alt='img' />
          <img src={SnehaS} alt='img' />
          <img src={Shruti} alt='img' />
          <img src={Rimjhim} alt='img' />

        </a>
      </p>
    </div>
    </Base>
  )
}

export default media
