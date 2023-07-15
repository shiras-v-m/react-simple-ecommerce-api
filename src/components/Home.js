import React, { useEffect, useState } from 'react'
import instance from '../instance'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../bootstrap.min.css'

import ProductCard from './ProductCard';

function Home() {
    const [products,setProduct]=useState([])
   const getProducts= async ()=>{
        // api call 
       const {data} =await instance.get()
        setProduct(data)
      //  console.log(data);
    }
    useEffect(()=>{
        getProducts()
    },[])
    // console.log(products);
  return (
    <>
    <Row className='mt-2 text-white'>
      <h1 className='text-dark text-center mt-2 fs-2' style={{textDecoration:"underline"}}>Collections</h1>
      {
     
     products.map(item=>(
          <Col className='p-4' sm={6} md={3} lg={3} >
            <ProductCard products={item}/>
          </Col>
     ))
      }
    </Row>
    </>
   
    
  )
}

export default Home