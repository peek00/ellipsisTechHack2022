import { Fragment, useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';

import initialNodes from "../data/nodes";
import initialEdges from "../data/edges";

import CustomNode from './customNode';
import './customNode.css';

const nodeTypes = {customNode : CustomNode}

function Flow() {

    const defaultEdgeOptions = { animated: true };

    //Input Elements
    const [name, setName] = useState("");
    const addNode = () => {
        setNodes((e=>e.concat({
            id:(e.length+1).toString(),
            data: {label:`${name}`, info:[]},
            position:{x:0, y:0},
            type: "customNode",
        })));
    }

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
  
    const onNodesChange = useCallback(
      (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
      [setNodes]
    );
    const onEdgesChange = useCallback(
      (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
      [setEdges]
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
      );

    const exportGraph = () =>{
        console.log(nodes)
    }
  
    return (
        <Fragment>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect ={onConnect}
                defaultEdgeOptions={defaultEdgeOptions}
                style= {{width:"100%", height:"90vh"}}
                fitView
                nodeTypes={nodeTypes}
            />
            <div>
                Create Node
                <input type="text" 
                onChange={e => setName(e.target.value)}
                name="title" />
                <button type="button" onClick={addNode}>Add</button>
            </div>

            <div>
                Compliance Check
                <button type="button" onClick={exportGraph}>Submit</button>
            </div>
      </Fragment>

    );
  }

  export default Flow;