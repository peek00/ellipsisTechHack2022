import React from "react";
import {  useLocation } from "react-router-dom";
import NavBar from '../component/navBar';



function ComplianceResult() {  
    const location = useLocation();
    const name = location.state?.name;


    
    return (
        <div>
            <NavBar/>
            <h1>Compliance Result Page</h1>
            <h2>{name}</h2>
        </div>
    );
}

export default ComplianceResult;
