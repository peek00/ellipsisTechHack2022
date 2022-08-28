import { Fragment, useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "react-flow-renderer";
import { useNavigate } from "react-router-dom";

import initialNodes from "../data/nodes";
import initialEdges from "../data/edges";


import CustomNode from "./customNode";
import "./customNode.css";
//Bootstrap stuff
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const nodeTypes = { customNode: CustomNode };

function Flow() {
  const navigate = useNavigate();

  const defaultEdgeOptions = { animated: true };

  //Input Elements
  const [name, setName] = useState("");
  const addNode = () => {
    setNodes((e) =>
      e.concat({
        id: (e.length + 1).toString(),
        data: { label: `${name}`, serviceOffered: [], serviceBorrowed: [] },
        position: { x: 0, y: 0 },
        type: "customNode",
      })
    );
  };

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

  const exportGraph = () => {
    //XY: Write function that creates ID, uuid4
    console.log(nodes);
    console.log(edges);
    //Write code that lets you export nodes / edges into your data base
    //Stringify first
    //Write code that generates ID to send to DB
    navigate("/structuralresult", {
      state: { nodesData: nodes, edgesData: edges },
    });
  };

  return (
    <Fragment>
      <Row>
        <Col lg={3}>
          <Card className="mt-1 border border-secondary">
            <Card.Body>
              <Card.Title>Welcome to</Card.Title>
              <h2>Structural Checker!</h2>
            </Card.Body>
          </Card>

          <Card className="mt-1 border border-secondary">
            <Card.Body>
              <Card.Title className="formTitle">Tools</Card.Title>
              <Card.Text>
                Entity Name <br></br>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  name="title"
                />
                <Button variant="dark" className="ms-3" type="button" onClick={addNode}>
                  Add
                </Button>
                <Card.Text>Create an entity by typing in the name and pressing add.</Card.Text>
                <Card.Text>After wards, fill in the service borrowed and offered by this company.</Card.Text>
                <Card.Text>Remember to connect them as part of your process!</Card.Text>
                <Card.Text>Once you are done, hit Submit below to check for compliance!</Card.Text>

              </Card.Text>
              <Card.Text>
                <Button variant="dark"  type="button" onClick={exportGraph}>
                  Submit
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={9}>
          <ReactFlow
            className="Canvas mt-1 border border-secondary rounded"
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            defaultEdgeOptions={defaultEdgeOptions}
            style={{ width: "100%", height: "80vh" }}
            fitView
            nodeTypes={nodeTypes}
          />
        </Col>
      </Row>
    </Fragment>
  );
}

export default Flow;
