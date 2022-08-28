import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

//Bootstrap
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CustomerInput(type) {
  const [customerName, setName] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/complianceresult", { state: { name: customerName } });
  };

  if (type.type === "customer") {
    return (
      <Row className="justify-content-center">
        <Col lg={3} >
        <Card className="mt-1 border border-secondary">
          <Card.Body>
        <p className="formTitle">Customer</p>
        <form onSubmit={handleSubmit} className="formFields">
          <p className="formFields"> Name </p>
     
          <input className="form-control"
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
    
          <p className="formFields"> Country </p>
          <select name="country" > 
            <option value="singapore">Singapore</option>
            <option value="notSingapore">Not Singapore</option>
          </select>
      
          <p className="formFields">SSN / NRIC </p>
          <input className="form-control" type="text" name="name" />
          <br></br>
          <div className="text-center">
            <Button  type="submit">Submit</Button>
          </div>
        
        </form>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    );
  } else {
    return <span></span>;
  }
}

export default CustomerInput;
