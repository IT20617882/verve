import React,{useState} from "react";
import axios from "axios";
import "./AddEdit.css"



export default function AddEdit(){

    
    
    

    return(
       
        <div>
            

            <div className="container1">
                <form action="http://localhost:8070/order/add" method="post" >

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label">Address</label>
                        <input type="text" name="address" className="form-control" id="inserProduct" placeholder="Enter address" required
                            />
                    </div>

                    <br />

                    <div className="col-md-5 element">
                        
                        <label for="inputQuant" className="form-label">Contact Number</label>
                        <input name="contactNO" type="text" className="form-control" id="inputQuant" placeholder="Enter contact number" pattern="[0]{1}[0-9]{9}"
                            />
                    </div>

                    <br />

                    <div className="col-md-5 element">
                        
                        <label for="inputQuant" className="form-label">Quantity</label>
                        <input name="quantity" type="number" className="form-control" id="inputQuant" placeholder="Enter quantity"
                            />
                    </div>
                    <br/>

                    <div className="col-md-7 element">
                        <label className="form-label" for="categorySelect"></label>
                        <select name="category" className="form-select" id="categorySelect"
                            >
                            <option>Choose Shipping Area...</option>
                            <option>Foreign</option>
                            <option>Western Provice : Rs.250.00</option>
                            <option>Sourthern : Rs.250.00</option>
                            <option>Central : Rs.300.00</option>
                            <option>Uva : Rs.350.00</option>
                            <option>Sabaragamuwa : Rs.400.00</option>
                            <option>North Western : Rs.350.00</option>
                            <option>North Central : Rs.400.00</option>
                            <option>Northern : Rs.550.00</option>
                        </select>
                    </div>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>

                    <button type="submit" position = "center"className="btn btn-primary Addbtn">Add Order</button>

                </form>
            </div>
        </div>
           

        
    )
}