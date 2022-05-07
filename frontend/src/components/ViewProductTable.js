import React from 'react';

const ViewProductTable = ({product , handleEditClick, handleDeleteClick}) => {
    return(
        <>
            <tr>
                <td>{product.productID}</td>
                <td>{product.productName}</td>
                <td>{product.category}</td>
                <td>{product.date}</td>
                <td>{product.price.toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
            }
        )}</td>
                <td>{product.quantity}{product.unit}</td>
                <td>
                    {(() => {

                        if (product.quantity <= 10) {

                        return (

                            <div style={{backgroundColor:'red',color:'white',textAlign:'center'}}>Low</div>

                        )

                    } else {

                        return (
          
                          <div style={{backgroundColor:'Green',color:'white',textAlign:'center'}}>Available</div>
          
                        )
          
                      }
          
                  })()}
                </td>
                <td>
                    <button type="button" onClick={(e) => handleEditClick(e,product)}>Edit</button>
                    <button type="button" onClick={() => handleDeleteClick(product._id)}>Delete</button>
                </td>
            </tr>
            
            
        </>
        
    )
}

export default ViewProductTable;