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
            <div className='text-center'>
                <p className="medText"> Compliance Result Page</p>
            </div>
            <ComplianceDashboard props={name}/>
        </div>
    );
}

export default ComplianceResult;
