import React,{useState} from "react"
import AddProductNavBar from './AddProductNavBar';



export default function AddProduct(){

    
    
    

    return(
       
        <div>
            <div><AddProductNavBar/></div>

            <div className="container">
                <form action="http://localhost:8070/product/add" method="post" class="form img " encType="multipart/form-data">

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label">Product ID</label>
                        <input type="text" name="productID" className="form-control" id="inserProduct" placeholder="Enter product id" required
                            />
                    </div>

                    

                    <div className="col-md-7 element">
                        <label for="inserProduct" className="form-label">Product Name</label>
                        <input type="text" name="productName" className="form-control" id="inserProduct" placeholder="Enter product name" required
                            />
                    </div>

                    

                    <div className="col-md-7 element">
                        <label className="form-label" for="categorySelect">Category</label>
                        <select name="category" className="form-select" id="categorySelect"
                            >
                            <option>Choose...</option>
                            <option>Coconut product</option>
                            <option>Rubber product</option>
                            <option>Apparel & Textile</option>
                            <option>Tea</option>
                            <option>Spices</option>
                            <option>Gems & jewelry</option>
                        </select>
                    </div>

                    <br />

                    <div className="col-md-3 element" style={{ display: 'block' }}>
                        <label for="datePicker" className="form-label">Received Date</label>
                        <input id="date" name="date" label="Choose Received Date" type="date" defaultValue="2022-03-01" InputLabelProps={{ shrink: true, }} required
                            />
                    </div>
                    <br/>
                    <table className="element">
                        <tr>
                            <td>
                                <div className="col-md-10">
                                    <label for="inputQuant" className="form-label">Quantity</label>
                                    <input name="quantity" type="text" className="form-control" id="inputQuant" placeholder="Enter the quantity"
                                        />
                                </div>
                            </td>

                            <td>
                                <div className="col-md-14">
                                    <label for="" className="form-label">Unit</label>
                                    <select id="inputState" className="form-select" name="unit">
                                        <option selected>Choose...</option>
                                        <option value="pcs">pieces</option>
                                        <option value="kg">kg</option>
                                        <option value="ℓ">liter</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </table>

                    

                    <div className="col-md-5 element">
                        <label for="inputQuant" className="form-label">Unit Price($)</label>
                        <input name="price" type="text" className="form-control" id="inputQuant" placeholder="Enter unit price"
                            />
                    </div>

                    <br />

                    <div className="element">
                        <label for="actual-btn" className="form-label">Upload Product Image</label>
                        <input type="file" id="actual-btn" name="image" className="upload textcolor" required
                            />
                    </div>

                    

                    <button type="submit" className="btn Addbtn">Add Product</button>

                </form>
            </div>
        </div>
           

        
    )
}