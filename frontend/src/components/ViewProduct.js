import React, {useState,useEffect,Fragment} from 'react';
import ViewProductNavBar from './ViewProductNavBar';
import axios from 'axios';
import EditProduct from './EditProduct';
import ViewProductTable from './ViewProductTable';


export default function ViewProducts(){

    const [products,setProducts] = useState([]);
    const [q, setQ] = useState("");

    useEffect(() =>{

        function getProducts() {
            axios.get("http://localhost:8070/product/view").then((res) => {

                setProducts(res.data);
                console.log(res.data)
            }).catch((err) => {

                alert(err.message);
            })
        }

        getProducts();

    }, [])

    const [editFormData, setEditFormData] = useState({
        productID: "",
        productName: "",
        category: "",
        date: "",
        price: "",
        quantity: "",
    })


    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }


    function updateData(e){
        e.preventDefault();
        
        const updateProduct ={
            ID: editProduct,
            productName: editFormData.productName,
            category: editFormData.category,
            price: editFormData.price,
            
        }

        axios.put("http://localhost:8070/product/update/:ID",updateProduct).then(() =>{
            alert("Product updated")
            window.location.reload();
        }).catch((err) =>{
            alert(err)
        })


    }


    const [editProduct,setEditProduct] = useState(null);

    const handleEditClick = (e, product)=> {
        e.preventDefault();
        setEditProduct(product._id)

        const formValues = {
            productID: product.productID,
            productName: product.productName,
            category: product.category,
            date: product.date,
            price: product.price,
            quantity: product.quantity,
        }

        setEditFormData(formValues);
    }

    const handleCancelClick = () => {
        setEditProduct(null);
    }


    const handleDeleteClick = (id) => {
        
        axios.delete('http://localhost:8070/product/delete/'+id).then(() =>{
            window.location.reload();
        }).catch((err) =>{
            alert(err)
        })

    }

       

    return(
        <div>
            <div className='back'><ViewProductNavBar/></div>
            
            
            <div className='search-container'>
                <input type="text" className="search" placeholder="Search..." value={q} onChange={(e)=> setQ(e.target.value)}/>      
            </div>
            

            <form onSubmit={updateData}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ProductID</th>
                            <th>ProductName</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.filter((product)=> {
                            if(q === ""){
                                return product
                            }else if(product.productName.toLowerCase().includes(q.toLowerCase())) {
                                return product
                            }
                        }).map((product)=> (
                            <Fragment>

                                {editProduct === product._id ? (
                                    <EditProduct 
                                        editFormData={editFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                 ) : (
                                    <ViewProductTable 
                                        product={product}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                 )}
                                 
                            </Fragment>
                            
                        ))}
                    </tbody>

                </table>
            </form>
            

        </div>
    );
}