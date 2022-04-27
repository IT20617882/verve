import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import Header from './Header';


export const View = () => {
  const [q, setQ] = useState("");
  const [data, setData] = useState([])
  const navigate = useNavigate()


  const getData = useCallback(() => {
    axios.get("http://localhost:8070/order/").then(({ data }) => {
      if (data && data.length) {
        setData(data)
      }
    })
  }, [])

  useEffect(() => {
    getData();
  }, [getData])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8070/order/delete/${id}`).then(() => {
      getData();
    })
  }

  return (


 
    <div className="container">
    
    <div className="wrapper">
    <div className="sidebar">
        <h2>Order Details</h2>
        <ul>

       
        
        </ul> 
  
</div>
  
      <br />
     
     
  
      <br />
      <div className="main_content">
        <div className="header">Enjoy Order!!!!.</div> <br/> <br/>
        <input className="search" type="text" placeholder="Search..."color="pink" value={q} onChange={(e)=> setQ(e.target.value)}/>
        <br/><br/>
        <div className="info">
      <table className="styled-table">
        <thead>
          <tr>
            <th>OrderId</th>
            <th>CustomerName</th>
            <th>Address</th>
            <th>ContactNo</th>
            <th>Quantity</th>
            <th>TotalAmount</th>
            <th>ExpectedDate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {data.filter((order)=> {

             if(q == ""){

           return order

         }else if(order.address.toLowerCase().includes(q.toLowerCase())) {

         return order

         }
        })
          .map(item => (
            <tr key={item._id}>
              <td>OD001</td>
              <td>Jayanga</td>
              <td>{item.address}</td>
              <td>{item.contactNO}</td>
              <td>{item.quantity}</td>
              <td>800.00</td>
              <td>25/04/2022</td>
              <td><button class = "btn" onClick={() => { navigate(`/edit/${item._id}`, { state: { ...item } }) }}>Edit</button><button class = "btn" onClick={() => { handleDelete(item._id) }}>Delete</button><button class ="btn" type="submit">Proceed to pay</button></td>
          
            </tr>

            
          ))}
          
        </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
      
    
  )
}

