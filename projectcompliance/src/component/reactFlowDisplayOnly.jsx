import { Fragment, useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "react-flow-renderer";
import {useNavigate} from "react-router-dom";

import CustomNode from "./customNode";
import "./customNode.css";

const nodeTypes = { customNode: CustomNode };

function FlowDisplay(propNodes, propEdges) {
  const defaultEdgeOptions = { animated: true };
  console.log(propNodes);

//   const [propNodes, setNodes] = useState();
//   const [propEdges, setEdges] = useState();
//   console.log(propNodes);
//   console.log(nodes);

//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     [setNodes]
//   );
//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     [setEdges]
//   );
//   const onConnect = useCallback(
//     (connection) => setEdges((eds) => addEdge(connection, eds)),
//     [setEdges]
//   );


  return (
    <Fragment>
      <ReactFlow
        nodes={propNodes}
        edges={propEdges}
        defaultEdgeOptions={defaultEdgeOptions}
        style={{ width: "100%", height: "90vh" }}
        nodeTypes={nodeTypes}
        fitView
      />
    </Fragment>
  );
}

export default FlowDisplay;
