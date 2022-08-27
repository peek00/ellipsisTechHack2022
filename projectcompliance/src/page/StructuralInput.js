import React from 'react';
import Flow from '../component/reactFlow';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function StructuralInput(edges="",nodes="") {
  return (
      <div className="App">
        <Flow/>
      </div> 
  );
}

export default StructuralInput;
