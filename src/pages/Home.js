import React from "react";
import Base from "../components/Base"
import Header from "../images/Home/header.jpg"
import "./Css/Home.css";

export default function Home() {
    return (
      <Base>
      <div className="home">
        <img src = {Header} alt='header' mx />
        <div className="content">
        <p><h5>Unnat Bharat Abhiyan</h5>Unnat Bharat Abhiyan is a flagship programme by the Ministry of Human Resource Development with an intention to enrich Rural India. This programme brings the premier higher educational institutes and villages together to cooperate and build an inclusive India. Since the soul of our country resides in the villages, it is very important to know about villages and its residents. It is very much essential to understand the problems of these villages and effective efforts should be made to provide them a life as equal as people enjoy in cities. According to Mahatma Gandhi-
        </p>
        <p>
        Cooperating with the people of villages, institutions can work on the solutions to the problems according to their capacity. They can provide them with technical support to improve their livelihoods in rural areas. The introduced technical innovation can boost the capabilities of both the public and the private organizations of society
        </p>
        <p>
        <h5>Need of Unnat Bharat Abhiyan</h5>
India’s 70% population lives in villages, and of the population living in villages, 51% are doing agrarian work but only contributing 17% to the country’s GDP. It is because the basic amenities are not available in rural India. People are migrating from rural to urban areas for better employment, education, health, and other basic amenities. This is increasing the burden on the urban areas leading to pollution, hygiene problems and poverty. Therefore, we must develop rural India to stop this migration and help the people live a better life in the villages by providing them with all the basic amenities. 

        </p>
        <p>
        <h5>Stakeholders in UBA</h5>
    
●	Ministry of Human Resource Development (MHRD)
The main work of MHRD is to provide funds to NCI, RCIs, and PIs for their functioning. It also provides funds for training sessions and SEGs. 
<br />
●	National Steering Committee (NSC)
It is a policy-making body which also connects all the stakeholders of UBA to state governments. It keeps eye on the work and coordination between different levels of UBA. 
<br />
●	National Co-ordination Institute (NCI)
The Indian Institute of Technology Delhi is the NCI for the scheme. It is responsible for the training of volunteers and selection of institutes, constituting SEGs and maintaining the development and reports through a web portal. The meeting of all the objectives under UBA is the responsibility of NCI. 
<br />
●	Subject Expert Groups (SEGs)
This is the group of institutions that provide expert solutions to the problems found in the villages based on the data collected by participating institutes. They act like a think tank for UBA. They are responsible for the orientation program and training of the student volunteers. They will visit the villages when a UBA program has to be implemented and will also help to provide grants wherever needed under a program. 
<br />
●	Regional Coordinating Institutions (RCIs)
These are the institutes which will increase the participation of participating institutes in their area and carry out their own village clusters program. These will keep an eye on the participating institutes in their area and provide them wherever needed. 
<br />
●	Participating Institutions (PIs)
The participating institutions are the ones who work on the root level. They find the need of the villages and conduct events and drills in the rural areas. They connect with state government/ district authorities/ gram panchayat to get emotional as well as financial support. They conduct surveys for data analytics and this data is further used to find solutions. 

        </p>
        </div>
      </div>
      </Base>
    );
  };
