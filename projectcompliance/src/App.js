import React from 'react';
import Flow from './component/reactFlow'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from 'react-bootstrap';



import './App.css';
import StructuralResult from './page/StructuralResult';
import StructuralInput from './page/StructuralInput';
import ComplianceInput from './component/complianceInput';
import ComplianceResult from './page/ComplianceResult';
import Home from './page/Home';


function App() {
  return (
    <Container fluid >
      <Router>
        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/structuralinput" element={StructuralInput()}/> 
          <Route path="/structuralresult" element={ <StructuralResult props/>}/>
          <Route path='/complianceinput' element={ComplianceInput()}/>
          <Route path='/complianceresult' element={<ComplianceResult props/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
