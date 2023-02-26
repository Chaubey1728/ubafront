import React from 'react'
import Base from '../components/Base'
import "./Css/About.css"

const About = () => {
  return (
    <Base>
    <div className='contact'>

        <h4>

    <h3>UBA team of Deshbandhu College:</h3> <br />
    
    <p>UBA Principal Coordinator: Prof. Varsha Baweja </p>
   
    <p>Teacher Coordinators: Prof Ruby Mishra, Dr Seema Gupta, Dr Ajay K Singh Gehlot, Dr Ashawani Kumar Singh, Dr Robin Kumar, Dr Sushma Sharma</p>
    <p>Student Coordinators: Shruti Ritolia & Nikhil Garg</p>
   

        </h4>

        <div className='gform'>
       <center>
         <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSev522iZfI8GjMJk3bPWupiydajTnLFc7SVD5ZYz21ITj0spQ/viewform?embedded=true" width="640" height="510" frameborder="2" border="double" marginheight="0" marginwidth="0">Loading…</iframe>
        </center>
        </div>
    
    </div>
    </Base>
  )
}

export default About