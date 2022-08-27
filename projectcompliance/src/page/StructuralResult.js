import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import FlowDisplay from '../component/reactFlowDisplayOnly';
import nodes from "../data/nodes";


function StructuralResult() {  
    const location = useLocation();
    const nodesData = location.state?.nodesData;
    const edgesData = location.state?.edgesData;
    
    return (
        <div>
            <h1>Result Page</h1>
            <h1></h1>
            <h2> Recommendations & Review</h2>
            <FlowDisplay propNodes={nodesData} propEdges={edgesData}/>
        </div>
    );
}

export default StructuralResult;
