import React from 'react'

import Mynav from './Mynav.css'
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl,Button } from 'react-bootstrap';  
import { Link } from 'react-router-dom';
function MyNav() {
  return (
  

    <div>
       <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">  
        <Container>  
       <div className='d-flex align-items-center'>
       <Link className='d-flex align-items-center' style={{textDecoration:"none"}} to={``}> <img  
        src='https://icon-library.com/images/e-commerce-icon-png/e-commerce-icon-png-5.jpg' 
        width="70"  
        height="70"  
        className="d-inline-block align-top me-3"  
        alt="Brand logo"  
      />  
          <Navbar.Brand href="" >Shoppy Hub</Navbar.Brand></Link>  </div>
        
          <Navbar.Toggle aria-controls="offcanvasNavbar" />  
        

          <Navbar.Offcanvas bg="light" 
      id="offcanvasNavbar"  
      aria-labelledby="offcanvasNavbarLabel"  
      placement="end"  
    >  
      <Offcanvas.Header  closeButton>  
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>  
      </Offcanvas.Header>  
      <Offcanvas.Body className='bg-light' >  
        <Nav className="justify-content-end flex-grow-1 pe-4">  

 
          <Nav.Link  className='text-dark fw-bolder' href="/">Mens</Nav.Link> 
          <Nav.Link  className='text-dark fw-bolder' href="/">Womens</Nav.Link>
          
         
          {/* <Nav.Link href="#action2">Sidebar Item 2</Nav.Link>   */}
    
        </Nav>  
        <Form className="d-flex">  
          <FormControl  
            type="search"  
            placeholder="Search"  
            className="me-2"  
            aria-label="Search"  
          />  
          <Button  className='btn p-2 ps-3 rounded' style={{background:"rgb(101, 201, 0)"}}><img  
        src='https://cdn-icons-png.flaticon.com/512/3031/3031293.png' 
        width="20"  
        height="20"  
        className="d-inline-block align-top me-3"  
        alt="Brand logo"  
      />  </Button > 
           {/* https://cdn-icons-png.flaticon.com/512/3031/3031293.png */}
        </Form>  
      </Offcanvas.Body>  
    </Navbar.Offcanvas> 
        </Container>  
      </Navbar>  
    </div>
  )
}

export default MyNav
