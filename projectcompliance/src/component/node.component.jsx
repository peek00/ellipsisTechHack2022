import React, {Fragment, useState} from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges }  from 'react-flow-renderer';


const initialElements = [
    {id:'1',
    type:'input',
    data: {label:'Node'},
    position: {x:50, y:100}}
]



function MindNode() {
    return (
        <Fragment>
            <h1>Hello</h1>
            <ReactFlow
                nodes={initialElements}
                style={{ width: '100%', height: '90vh' }}
               
                />
        </Fragment>
    );
}

export default MindNode;