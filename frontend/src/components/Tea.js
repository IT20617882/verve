import React, {useState,useEffect,Fragment} from 'react';
import axios from 'axios';
import ViewTea from './ViewTea';
import Header from './Header';
import {Row,Container} from 'react-bootstrap'


export default function Tea() {

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
                  
                      <ViewTea product={product}/>
                
              ))}
           </Row>
            </Container> 
                
            
        </>
    )
}