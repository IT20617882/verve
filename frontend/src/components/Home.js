import React from 'react';
import {Link} from "react-router-dom";


export default function home(){
    return(
        <div className='back'>
            <h1>This is home page</h1>
            <Link to="/add">Go to add product page</Link>
        </div>
    )
}