
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../instance';
import Image from 'react-bootstrap/Image';
import { Row,Col } from 'react-bootstrap';
import ViewProductStyle from './ViewProductStyle.css'
function ViewProduct() {
    const [products,setProducts]=useState()
   const {id}= useParams()
   console.log(id);

   useEffect(()=>{
    getProducts()
   },[])
   const getProducts=async ()=>{
    const {data}=await instance.get()
    // console.log(data);
    setProducts(data) 
}
const buy=()=>{
    alert("This is a demo page")
}
const response= products?.find(item=>item.id==id)
console.log(response)
    // console.log(products); 
  return (
        <div className='container'>
        <Row className='row text-dark'>
            <Col md={5}>
            <Image className='productImage p-5' src={response && response.image }  />
            </Col>
            <Col className='mt-5' md={7}>
                <h2>{response && response.title }</h2>
                <h6>Rating : <span className='fw-bolder fs-5' style={{color:"coral"}}>{response && response.rating.rate}</span></h6>
                <h5 className='fw-bolder'>${response && response.price} <span className='fs-6 text-light'>/per box</span></h5>
                <p>{response && response.description}</p>
                <div style={{width:"100%",textAlign:"center"}}>
                <button onClick={buy} className='btn btn-danger mb-4'>Buy now</button>
                </div>
                
            </Col>
        </Row>
        </div>

  )
}

export default ViewProduct