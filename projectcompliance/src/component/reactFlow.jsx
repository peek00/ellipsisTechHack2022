import { Fragment, useCallback, useState, useEffect } from "react";
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
} from "react-flow-renderer";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";

import initialNodes from "../data/nodes";
import initialEdges from "../data/edges";

import CustomNode from "./customNode";
import "./customNode.css";

import { createStructureChecker } from "../graphql/mutations";
import { getStructureChecker } from "../graphql/queries";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const nodeTypes = { customNode: CustomNode };

function Flow() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("n"));

    const defaultEdgeOptions = { animated: true };

    //Input Elements
    const [name, setName] = useState("");
    const addNode = () => {
        setNodes((e) =>
            e.concat({
                id: (e.length + 1).toString(),
                data: {
                    label: `${name}`,
                    serviceOffered: [],
                    serviceBorrowed: [],
                },
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

    async function exportGraph() {
        try {
            //XY: Write function that creates ID, uuid4
            console.log(nodes);
            console.log(edges);
            const information = { nodes: nodes, edges: edges };
            const newuuid = uuidv4();
            console.log(newuuid);
            console.log(information);
            console.log(typeof information);
            //Write code that lets you export nodes / edges into your data base
            //Stringify first
            //Write code that generates ID to send to DB
            await API.graphql({
                query: createStructureChecker,
                variables: {
                    input: {
                        id: newuuid, //by right should be generated from user id, but we have no login model
                        input: JSON.stringify(information),
                        output: JSON.stringify(information),
                    },
                },
            });
            navigate("/structuralresult", {
                state: { uuid: newuuid, nodesData: nodes, edgesData: edges },
            });
        } catch (err) {
            console.log("error creating graph:", err);
        }
    }

    return (
        <Fragment>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                defaultEdgeOptions={defaultEdgeOptions}
                style={{ width: "100%", height: "90vh" }}
                fitView
                nodeTypes={nodeTypes}
            />
            <div>
                Create Node
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    name="title"
                />
                <button type="button" onClick={addNode}>
                    Add
                </button>
            </div>

            <div>
                Compliance Check
                <button type="button" onClick={exportGraph}>
                    Submit
                </button>
            </div>
        </Fragment>
    );
}

export default Flow;
