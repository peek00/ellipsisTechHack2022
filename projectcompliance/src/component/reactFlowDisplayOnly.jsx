import { Fragment,  useState } from "react";
import ReactFlow, {
} from "react-flow-renderer";
import CustomNode from "./customNode";
import "./customNode.css";

//Bootstrap
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {FcApproval, FcHighPriority, FcInfo} from "react-icons/fc";
import Alert from 'react-bootstrap/Alert';


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
        <Row>
          <Col lg={6}>
            <ReactFlow className="Canvas mt-1 border border-secondary rounded"
              nodes={nodes}
              edges={edges}
              defaultEdgeOptions={defaultEdgeOptions}
              style={{ width: "100%", height: "80vh" }}
              nodeTypes={nodeTypes}
              fitView
            />
          </Col>
          <Col lg={6}>
            <Card className="mt-1 border border-secondary">
              <Card.Body>
                <Card.Title><FcApproval size={45}/> Things look fine!</Card.Title>
                <Card.Text>Your structural does not violate any regulations in Singapore.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-1 border border-secondary">
              <Card.Body>
                <Card.Title><FcHighPriority size={45}/>Possible Breach!</Card.Title>
                <Card.Text>Your structural violates EVERY regulations in Singapore.</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-1 border border-secondary">
              <Card.Body>
                <Card.Title><FcInfo size={45}/>Recommended Actions</Card.Title>
                <Card.Text>You need to amend your financial structure.</Card.Text>
                <Card.Text> Here are some links:</Card.Text>
                <Alert>
                  <Alert.Link href="https://www.linkedin.com/in/lim-xun-yi/">https://www.linkedin.com/in/lim-xun-yi/</Alert.Link>
                </Alert>
              </Card.Body>
            </Card>
            <Alert variant="success mt-1">
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <p>
                Thank you for using our Structural Checker to review your company's structure. 
                At Goldman Sachs, we believe that a stable and prosperous economy is not the responsibility
                of just any firm, company or instituion, but a responsibilty we all, financial instituions especially,
                hold.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to reach out to us to get more information and consultation! 
              </p>
            </Alert>
          </Col>
 

        </Row>
    </Fragment>
  );
}

export default FlowDisplay;
