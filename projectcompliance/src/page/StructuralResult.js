import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import FlowDisplay from '../component/reactFlowDisplayOnly';
import NavBar from '../component/navBar';

function StructuralResult() {  
    const location = useLocation();
    const nodesData = location.state?.nodesData;
    const edgesData = location.state?.edgesData;
    
    return (
        <div>
            <NavBar/>     
            <FlowDisplay propNodes={nodesData} propEdges={edgesData}/>
        </div>
    );
}

export default StructuralResult;
