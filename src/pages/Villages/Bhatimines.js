import React from 'react'
import Base from '../../components/Base'
import "./Css/Bhati.css"
import { Container, Card, CardBody, CardTitle, Row, CardLink, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Bhatimines() {
  return (
    <Base>
    <div>
      <center><h2>Bhati mines</h2></center>
    </div>
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
    <p>Village Name: Bhati Mines (भाटी माइंस)</p>
    <p>Latitude: 28.4300°</p>
    <p>Longitude: 77.2260°</p>
    <p>District: South West Delhi</p>
    <p>Pin Code: 110074</p>
    <p>State: Delhi</p>
    <p>Language: Hindi</p>
    <p>Elevation/Altitude: 166.6 meters above the Sea Level</p>
    <p>Telephone Code/Std Code: </p>
    <p>Population (2011 Census): 18664 Male: 10114 Female: 8750</p>
    <p>Sex Ratio (2011 Census): 865</p>
    <p>Child Sex Ratio (2011 Census): 908</p>
    <p>Literary Rate (2011 Census): 65.24% Male: 75.16% Female: 53.66%</p>
    <p>The migrants started settling near Bhati Mines about two decades back. The latest group of around 150 families arrived two years back. At present, there are around 8,000 refugees residing in this 128-acre illegal colony where they do not have access to safe drinking water, electricity, or basic medical facilities.</p>
    <p><h6>How to reach Bhati Mines</h6>
    By Rail:<br/>
    Faridabad Railway Station is the nearest.<br/>
    Local Bus:<br/>
    Bhati Mines bus stand is the nearest one.<br/>
    By Metro:<br/>
    Chattarpur Metro Station is the nearest one. </p>
    <p><h6>Government Health Centers near Bhati Mines</h6>
    1) Mother and Child Welfare Centre<br/>
    2) Government Veterionery Hospital </p>
    <p><h6>Polling Stations/Booth near Bhati Mines</h6>
    1) SDMC Primary Co-ed School, Bhati Mines<br/>
    2) Govt Co-ed Sr Sec School Sanjay Colony </p>


    </div>
    </Base>
  )
}

export default Bhatimines
