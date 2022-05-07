import React, {useState,useEffect} from 'react';
import axios from 'axios';
import ViewRubber from './ViewRubber';
import Header from './Header';
import {Row,Container} from 'react-bootstrap'


export default function Rubber() {

    const [products,setProducts] = useState([]);

    useEffect(() =>{

        function getProducts() {
            axios.get("http://localhost:8070/product/view").then((res) => {

                setProducts(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }

        getProducts();

    }, [])

    return (
        <>
            <Header/>
                
           <br/>
           <Container className='justify-content-center p-2'>
           <Row>
              {products.map((product)=> (
                  
                      <ViewRubber product={product}/>
                  
              ))}
           </Row>
           </Container>
           
            
                
            
        </>
    )
}