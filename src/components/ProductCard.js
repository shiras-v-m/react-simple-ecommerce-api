import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCardstyle from './ProductCardstyle.css'
import ViewProduct from './ViewProduct';
import { Link } from 'react-router-dom';

function ProductCard({products}) {
    console.log(products)
    return (
        <>
            <div className='mt-2'>
             <Card className='border bg-white p-3' style={{}}>
                <Link style={{textDecoration:"none"}} to={`/view/${products.id}`}>
                                    <Card.Img className='image' variant="top" src={products.image} />
                                    <Card.Body className='text-dark text-center'>
                                        <Card.Title >{products.category}</Card.Title>
                                        <Card.Text>
                                            {products.price}
                                        </Card.Text>
                    
                                        <Button variant="primary">View options</Button>
                                      
                                    </Card.Body>
                                    </Link>
                                </Card>
                </div>
        </>
    )
}

export default ProductCard