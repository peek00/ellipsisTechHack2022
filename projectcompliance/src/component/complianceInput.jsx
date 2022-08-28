import { useCallback, useState } from "react";

import EntityInput from "./entityInput";
import CustomerInput from "./customerInput";
import NavBar from "./navBar";

//Bootstrap
import { Row, Col } from "react-bootstrap";

function ComplianceInput() {
  const [type, setType] = useState("customer");
  const onChange = useCallback((evt) => {
    //Update service type without pressing enter
    setType(evt.target.value);
  });

  return (
    <div>
      <NavBar/>
      <div className='text-center'>
        <p className="homeText mt-5 mb-0"> Welcome to the all new </p>
        <p className="medText"> Compliance Checker</p>
        <p className="homeText">Choose between Entity or Customer</p>
      </div>
     
      <Row className="justify-content-center">
      <Col className="justify-content-center" lg={3}>
      <select name="type" onChange={onChange}>
        <option value="customer">Customer </option>
        <option value="entity">Entity</option>
      </select>
      </Col>
      </Row>
      <CustomerInput type={type} />
      <EntityInput type={type} />
    </div>
  );
}

export default ComplianceInput;
