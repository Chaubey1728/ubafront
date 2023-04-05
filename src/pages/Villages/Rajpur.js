import React from 'react'
import Base from '../../components/Base'
import "./Css/Rajpur.css"
import { Container, Card, CardBody, CardTitle, Row, CardLink, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Rajpur() {
  return (
    <Base>
    <div><center><h2>Rajpur</h2></center></div>
    <div className='cont'>
    <Container className="village1">
        <Row className="vill_col">
        <Col className="">
          <Card >
            <CardBody className="VillgBody ">
              <CardTitle className="VillgTitle"><h3>VILLAGES</h3></CardTitle>
              <hr className='' ></hr>
              <CardLink className="Bhati" tag={Link} to="/Bhati" >Bhati Mines</CardLink>
              <br />
              <CardLink className="Chandan" tag={Link} to="/chandan" >Chandan Hola</CardLink>
              <br />
              <CardLink className="Rajpur" tag={Link} to="/rajpur" >Rajpur Khurd</CardLink>
              <br />
              <CardLink className="Satbari" tag={Link} to="/satbari" >Satbari</CardLink>
              <br />
              <CardLink className="Sultanpur" tag={Link} to="/sultanpur" >Sultan Pur</CardLink>

            </CardBody>
          </Card>
          </Col>
        </Row>
        </Container>
    <p>Village Name: Rajpur Khurd ( राजपुर खुर्द )</p>
    <p>Latitude: 28.4903° </p>
    <p>Longitude: 77.1902°  </p>
    <p>District: South Delhi</p> 
    <p>Pin Code: 110068 </p>
    <p>State: Delhi </p>
    <p>Language: Hindi </p>
    <p>Elevation/Altitude: 214 meters above sea level </p>
    <p>Telephone Code/Std Code: 011</p>
    <p>Population (2011 Census): 11161 Male: 6049 Female: 5112</p>
    <p>Sex Ratio (2011 Census): 845</p>
    <p>Child Sex Ratio (2011 Census): 911</p>
    <p>Literacy Rate (2011 Census): 90.3%     Male: 95.25%     Female: 84.34%</p>
    <p>Rajpur Khurd Census Town has total administration of over 2,388 houses to which it supplies basic amenities such as water and sewerage. It is also authorised to build roads within Census Town limits and impose taxes on properties coming under its jurisdiction. </p>
    <p><h6>How to reach Rajpur Khurd </h6>
    By Rail: <br/>
    The nearest railway station is Safdarjung Railway Station <br/>

    Local Bus: <br/>
    Rajpur Bus Station, Chattarpur Extension Bus Station, Rajpur Crossing Bus Station, Satbari Village Bus Station, and Maidan Garhi Bus Station are nearby Local Bus Stops to Rajpur Khurd. 
    <br/>
    Nearest Metro: <br/>
    Chhatarpur is the nearest metro to this village.</p>
    <p><h6>Govt Health Centers near Rajpur Khurd </h6>
    1) DGD Chattarpur, DGD Chattarpur , Chattarpur ,Village New Delhi 110030 <br />
    2) SPUHC Neb Sarai , H No. 447, , Neb Sarai <br />
    3) Aman Medical Centre , 1061 /7, Dargah Street, Mehrauli, New Delhi, Delhi 110030 , 1061 /7, Dargah Street, Mehrauli, New Delhi, Delhi 110030 , 1061 /7, Dargah Street, Mehrauli, New Delhi, Delhi 110030 <br /></p>
    <p><h6>Polling Stations /Booths near Rajpur Khurd </h6>
    1) Maidan Garhi <br />
    2) New Mangla Puri <br />
    3) Rajpur Khurd <br /></p>

    </div>
    </Base>
  )
}

export default Rajpur