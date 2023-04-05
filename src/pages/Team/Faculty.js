import React from 'react'
import Base from '../../components/Base'
import { CardGroup, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap' 
import "./Css/Faculty.css"
import ashwini from "../../images/Faculty/ahwini.jpeg"
import ajay from "../../images/Faculty/ajay_gehlot.jpeg"
import robin  from "../../images/Faculty/robin.jpeg"
import ruby from "../../images/Faculty/ruby.jpeg"
import seema from "../../images/Faculty/seema.jpeg"
import sushma from "../../images/Faculty/sushma.jpeg"
import  varsha  from "../../images/Faculty/varsha.jpeg"

function Faculty() {
  return (
    <Base>
    <div>
      <center>

      <Card className='varsha'>
    <CardImg
      alt="Teacher Coordinator"
      src={varsha}
      top
      width="49%"
    />
    <CardBody>
      <CardTitle tag="h5">
        UBA Convenor
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
        >
        Prof.Varsha Baweja
      </CardSubtitle>
      <CardText>
      Introducing our UBA Convenor of Deshbandhu College, Prof. Varsha Baweja. From the initiative in 2021 to the working of UBA in 2023, she has worked tirelessly, guiding many students and other teacher coordinators. The outcome of the UBA is depicting her experience and excellence in the work🌼
      </CardText>
    </CardBody>
  </Card>
      
    
   <Card className='seema'>
    <CardImg
      alt='Teacher'
      src={seema}
      top
      width="49%"
      height="49%"
      />
    <CardBody>
      <CardTitle tag="h5">
        UBA Convenor
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Dr. Seema Gupta
      </CardSubtitle>
      <CardText>
      One of the hardworking members of UBA, Dr Seema Gupta has given her faithful service to the Abhiyan. Working as a teacher coordinator she has ushered many students🌼
      </CardText>
    </CardBody>
  </Card>


  <Card className='ashawini'>
    <CardImg
      alt="Teacher Coordinator"
      src={ashwini}
      top
      width="100%"
      height="49%"
    />
    <CardBody>
      <CardTitle tag="h5">
      UBA Convenor
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Dr.Ashawani K Singh
      </CardSubtitle>
      <CardText>
      Meet our Teacher Coordinator Dr Ashawani K Singh. He is one of the most active members of the team UBA. His communication skills with locals help us to connect with them. His guidance is obliging for all the students🌼
      </CardText>
    </CardBody>
  </Card>



  <Card className='sushma'>
    <CardImg
      alt="Card image cap"
      src={sushma}
      top
      width="100%"
      height="49%"
    />
    <CardBody>
      <CardTitle tag="h5">
      UBA Convenor
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
        >
        Dr. Sushma Sharma
      </CardSubtitle>
      <CardText>
      Introducing Dr. Sushma Sharma, our teacher coordinator. Contributing her precious time to the nation’s service has led her to join the Abhiyan as a Teacher Coordinator. Her suggestions and work in the field are impressive.

      </CardText>
    </CardBody>
  </Card>
    


    
   <Card className='ajay'>
    <CardImg
      alt="Teacher Coordinator"
      src={ajay}
      top
      width="49%"
      height="49%"
      />
    <CardBody>
      <CardTitle tag="h5">
        UBA Convenor
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Dr. Ajay P S Gehlot
      </CardSubtitle>
      <CardText>
      In our team, ‘Field work’ is associated with the name of our Teacher Coordinator, Dr Ajay P S Gehlot. Active in the field he also diligently work for the Abhiyan🌼
      </CardText>
    </CardBody>
  </Card>


  <Card className='robin'>
    <CardImg
      alt="Card image cap"
      src={robin}
      top
      width="100%"
      height="49%"
      />
    <CardBody>
      <CardTitle tag="h5">
      UBA Convenor
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Dr.Robin Kumar
      </CardSubtitle>
      <CardText>
      Always ready for serving, meet our Teacher Coordinator Dr Robin Kumar. Working in the field, he performs his job ideally. His inner voice for helping the poor always proves motivating🌼
      </CardText>
    </CardBody>
  </Card>



  <Card className='ruby'>
    <CardImg
      alt="Card image cap"
      src={ruby}
      top
      width="100%"
      height="49%"
    />
    <CardBody>
      <CardTitle tag="h5">
      UBA Convenor
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
        >
        Prof. Ruby Mishra
      </CardSubtitle>
      <CardText>
      Pleasant to introduce Prof. Ruby Mishra, our Teacher Coordinator helping the UBA in every aspect possible. Her involvement in UBA is goodly and inspiring 🌼
      </CardText>
    </CardBody>
  </Card>
        </center>
    
    </div>
    </Base>
  )
}

export default Faculty
