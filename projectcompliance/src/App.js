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
        <Route path="/structuralinput" element={StructuralInput()}/>
        <Route path="/structuralresult" render={(props) => StructuralInput({...props})} element={StructuralResult()}/>
        {/* <Route path="/structuralresult" element={StructuralResult()}/> */}
        {/* <Route path="/test/new" render={(props) => <NewTestComp {...props}/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
