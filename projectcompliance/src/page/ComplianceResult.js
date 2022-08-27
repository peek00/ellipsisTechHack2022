import React from "react";
import {  useLocation } from "react-router-dom";



function ComplianceResult() {  
    const location = useLocation();
    const name = location.state?.name;


    
    return (
        <div>
            <h1>Compliance Result Page</h1>
            <h2>{name}</h2>
        </div>
    );
}

export default ComplianceResult;
