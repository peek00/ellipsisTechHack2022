import React from "react";
import {  useLocation } from "react-router-dom";
import NavBar from '../component/navBar';
import ComplianceDashboard from "../component/ComplianceDashboard";


function ComplianceResult() {  
    const location = useLocation();
    const name = location.state?.name;


    
    return (
        <div>
            <NavBar/>

            <h1>Compliance Result Page</h1>
            <ComplianceDashboard props={name}/>
        </div>
    );
}

export default ComplianceResult;
