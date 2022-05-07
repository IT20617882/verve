import React from "react";
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";

function ViewNavbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light nav">

            <div className="container-fluid">
    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link to="/" class="btn homebtn"><FaHome/>Home</Link>

                <div className="collapse navbar-collapse"></div>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav Navbtn">

                        <Link to="/add" type="radio" className="btn nav-link anime color" style={{color:"white"}} aria-current="page">Add Product</Link>
                        <Link to="/view" type="radio" className="btn nav-link anime color active" style={{color:"white"}}>View Product</Link>
                        
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default ViewNavbar;