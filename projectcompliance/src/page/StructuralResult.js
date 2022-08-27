import React from "react";
import FlowDisplay from '../component/reactFlowDisplayOnly';


function StructuralResult(edges,nodes) {

    return (
        <div>
            <h1>Result Page</h1>
            <FlowDisplay propNodes={nodes} propEdges={edges}/>
        </div>
    );
}

export default StructuralResult;
