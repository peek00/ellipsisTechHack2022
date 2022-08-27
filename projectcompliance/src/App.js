import React from 'react';
import Flow from './component/reactFlow'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import './App.css';
import StructuralResult from './page/StructuralResult';
import StructuralInput from './page/StructuralInput';


function App() {
  return (
    <Router>
      <Routes>
      {/* <div className="App">
        <Flow/>
      </div> */}
        <Route exact path="/structuralresult" element={StructuralResult()}/>
        <Route exact path="/structuralinput" element={StructuralInput()}/>
      </Routes>
    </Router>
  );
}

export default App;
