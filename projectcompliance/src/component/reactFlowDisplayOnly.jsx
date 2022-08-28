import { Fragment,  useState } from "react";
import ReactFlow, {
} from "react-flow-renderer";
import CustomNode from "./customNode";
import "./customNode.css";

const nodeTypes = { customNode: CustomNode };


function FlowDisplay(propNodes, propEdges) {
  const defaultEdgeOptions = { animated: true };

//   const getFromDb = () = {
//     //Code that gets from data base, returns nodes _+ edges object to use in useState
// }

  const [nodes,setNodes] = useState(propNodes.propNodes);

  const [edges, setEdges] = useState(propNodes.propEdges);

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
        nodes={nodes}
        edges={edges}
        defaultEdgeOptions={defaultEdgeOptions}
        style={{ width: "100%", height: "90vh" }}
        nodeTypes={nodeTypes}
        fitView
      />
    </Fragment>
  );
}

export default FlowDisplay;
