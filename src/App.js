import React, { useState, useEffect } from 'react';
//useState, useEffect we are loading from the react to load few stuff  before anything happens
//To store the information we are using state 
import { Container,Row,Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
//To Handle API we will Use axios Package
import Axios from 'axios';
import './App.css';
import MyCard from './MyCard';


function App() {
//We are Using destructor Object

  const [details,setDetails] = useState({});
  const url = "https://randomuser.me/api";
  const fetchDetails = async () => {
    const { data } = await Axios.get(url);
   const detail = data.results[0];
    setDetails(detail);
    console.log(detail);

  };
  useEffect(()=>{
 fetchDetails();
  },[]);

  
  
  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4">
  <MyCard details={details}/>
        </Col>
      </Row>
    </Container>
  )
    
}

export default App;
