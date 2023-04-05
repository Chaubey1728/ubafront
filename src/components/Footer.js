import React from 'react'
import Ilogo from "../images/Footer/insta.jfif"
import Flogo from "../images/Footer/fb.png"
import Tlogo from "../images/Footer/twiter.png"
import Llogo from "../images/Footer/linkdin.png"
import "./Css/Footer.css"

const Footer = () => {
    


  return (
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                {/*Column1*/}
                <div className='col'>
                    <h4>Contact Us</h4>
                    <br />
                    <ul className='list'>
                        
                        <li className='it'>Instagram <button className='i'><a href='https://www.instagram.com/uba.dbc/' className='insta' ><img src={Ilogo} alt='ilogo' /> </a></button></li> 
                        <br />
                        <li className='tt'>Twiter <button className='t' ><a href="https://twitter.com/uba_dbc?t=1hyuyT8wkD_Bwat7BE7a8w&s=09"className='twiter' ><img src={Tlogo} alt='tlogo' /> </a></button></li> 
                        <br />
                    </ul>
                </div>
                {/*Column2*/}
                <div className='col'>
                    <h4>Contact Us</h4>
                    <br />
                    <ul className='list'>
                    <li className='ft'>Facebook <button className='f'><a href='https://www.facebook.com/profile.php?id=100082423424698&mibextid=ZbWKwL' className='fb' ><img src={Flogo} alt='flogo' /> </a></button></li> 
                    <br />
                    <li className='ld'>Linkdin <button className='l'><a href='https://www.linkedin.com/company/unnat-bharat-abhiyan-deshbandhu-college/' className='ld' ><img src={Llogo} alt='llogo' /> </a></button></li> 

                    </ul>
                    </div>
                {/*Column3*/}
                <div className='col'>
                    <h4>Developer</h4>
                    <br />
                    <ul className='list'>
                    <li className='it'>Instagram <button className='i'><a href='https://www.instagram.com/Chaubey1728/' className='insta' ><img src={Ilogo} alt='ilogo' /> </a></button></li> 

                    </ul>
                    </div>

            </div>
        </div>
        <div className='row1'>
            <p className='col-sm'>
                &copy;{new Date().getFullYear()} UBA DESHBANDHU | ALL RIGHT RESERVED | TERMS OF SERVICES | PRIVACY
            </p>
        </div>
    </div>
  )
}

export default Footer