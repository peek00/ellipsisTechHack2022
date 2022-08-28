import { Fragment, useCallback, useState } from "react";
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
} from "react-flow-renderer";
import { useNavigate } from "react-router-dom";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import fetch from "node-fetch";

import { getStructureChecker } from "../graphql/queries";
import CustomNode from "./customNode";
import "./customNode.css";
import initialNodes from "../data/nodes";
import initialEdges from "../data/edges";

const nodeTypes = { customNode: CustomNode };
const promise = fetch("http://localhost:3000/structuralresult");

function FlowDisplay(propNodes, propEdges, uuid) {
    const defaultEdgeOptions = { animated: true };

    //   const getFromDb = () = {
    //     //Code that gets from data base, returns nodes _+ edges object to use in useState
    // }
    let data1;
    let data2;

    async function getSC() {
        const info = await API.graphql({
            query: getStructureChecker,
            variables: {
                id: `${propNodes.uuid}`,
            },
        });
        console.log(info);
        console.log("above is info in getsc");
        console.log(JSON.parse(info.data.getStructureChecker.input)["nodes"]);
        console.log(JSON.parse(info.data.getStructureChecker.input)["edges"]);
        data1 = JSON.parse(info.data.getStructureChecker.input)["nodes"];
        data2 = JSON.parse(info.data.getStructureChecker.input)["edges"];
        setNodes(data1);
        setEdges(data2);

        return [
            JSON.parse(info.data.getStructureChecker.input)["nodes"],
            JSON.parse(info.data.getStructureChecker.input)["edges"],
        ];
    }
    getSC();

    // promise.then((data1) => console.log(data1));
    // const nodes = propNodes.propNodes;
    // const edges = propEdges.propEdges;

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    // const onNodesChange = useCallback(
    //     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    //     [setNodes]
    // );
    // const onEdgesChange = useCallback(
    //     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    //     [setEdges]
    // );
    // const onConnect = useCallback(
    //     (connection) => setEdges((eds) => addEdge(connection, eds)),
    //     [setEdges]
    // );

    return (
        <Fragment>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                // onNodesChange={onNodesChange}
                // onEdgesChange={onEdgesChange}
                // onConnect={onConnect}
                defaultEdgeOptions={defaultEdgeOptions}
                style={{ width: "100%", height: "90vh" }}
                nodeTypes={nodeTypes}
                fitView
            />
        </Fragment>
    );
}

export default FlowDisplay;
