import {React,useState,useEffect} from "react";
import {Button, Col, Row} from "react-bootstrap";
import Service_option from "./Service_option";
import { useParams } from "react-router-dom";
import axios from "axios";

function createServiceCard(service_card)
{
    return <Col sm={12} lg={6}><Service_option name={service_card.name} rating={service_card.rating} cost={service_card.cost} time={service_card.time} details={service_card.details} image={service_card.image} /></Col>;
}

function Options()
{  
    const params=useParams();
   
    const [service_card,setService_card]=useState([]);
    useEffect(async()=>{
        console.log("came");
        console.log(params.cname);
        try{
            const data1= await axios.get("http://localhost:5000/getService/"+params.cname);
            setService_card(data1.data);
        }
        catch(error)
        {
            console.log(error)
        }
    },[])
 
   
    /*const params=useParams();
   console.log(params.cname);
    const [service_card,setService_card]=useState([]);
  
    useEffect(()=>{async function get(){
        try{
            console.log("yes");
            const data1= await axios.get("http://localhost:5000/getService/"+params.cname);
            setService_card(data1.data);
        }
        catch(error)
        {
            console.log(error)
        }
    get();
}},[]);*/
 
  
   //<Col  lg={2}> <Filter name={params.name} cost={params.cost} show={params.val} /></Col>
    return <div >
            <Row className="mt-5">
                <Col lg={1}></Col>
                <Col  lg={8} className="Scroll"><Row >{service_card.map(createServiceCard)}</Row></Col>
                <col lg={3}></col>
            </Row>
    </div>
}

export default Options;