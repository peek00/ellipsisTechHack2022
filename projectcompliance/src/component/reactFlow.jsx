import { Fragment, useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';

import initialNodes from "../data/nodes";
import initialEdges from "../data/edges";

// const initialNodes = [
//     {
//       id: '1',
//       type: 'input',
//       data: { label: 'Input Node' },
//       position: { x: 250, y: 25 },
//     },
  
//     {
//       id: '2',
//       // you can also pass a React component as a label
//       data: { label: <div>Default Node</div> },
//       position: { x: 100, y: 125 },
//     },
//     {
//       id: '3',
//       type: 'output',
//       data: { label: 'Output Node' },
//       position: { x: 250, y: 250 },
//     },
//   ];

function Flow() {

    const styles = {color:"red"}
    const defaultEdgeOptions = { animated: true };

    //Input Elements
    const [name, setName] = useState("");
    const addNode = () => {
        setNodes((e=>e.concat({
            id:(e.length+1).toString(),
            data: {label:`${name}`},
            position:{x:0, y:0}
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
            />
            <div>
                Create Node
                <input type="text" 
                onChange={e => setName(e.target.value)}
                name="title" />
                <button type="button" onClick={addNode}>Add</button>
            </div>
      </Fragment>

    );
  }

  export default Flow;