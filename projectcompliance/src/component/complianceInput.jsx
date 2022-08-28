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
      <Row className="justify-content-center">
      <h1>Compliance Checker</h1>
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
