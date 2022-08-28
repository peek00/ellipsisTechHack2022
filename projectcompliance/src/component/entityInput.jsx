import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./navBar";

//Bootstrap
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function EntityInput(type) {
  let serviceOffered = [];
  let serviceBorrowed = [];

  let serviceType = "offered";
  let service;
  const onServiceChange = (evt) => {
    service = evt.target.value;
    return service;
  };

  const [entityName, setName] = useState("");

  const handleAddService = (evt) => {
    //Check if empty string

    if (serviceType === "offered") {
      serviceOffered.push(service);
    } else if (serviceType === "borrowed") {
      serviceBorrowed.push(service);
    }
    evt.preventDefault();
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/complianceresult", { state: { name: entityName } });
  };

  const onChange = useCallback((evt) => {
    //Update service type without pressing enter
    serviceType = evt.target.value;
  });

  if (type.type === "entity") {
    return (
      <Row className="justify-content-center">
        <Col lg={3}>
        <Card className="mt-1 border border-secondary">
          <Card.Body>
          <p className="formTitle">Entity</p>
        <form onSubmit={handleSubmit} className="formFields">
        <p className="formFields"> Name </p>
          <input className="form-control"
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
          <br></br>
          <p className="formFields">Country </p>
          <select name="country">
            <option value="singapore">Singapore</option>
            <option value="notSingapore">Not Singapore</option>
          </select>
          <br></br>
          <p className="formFields">Service</p>
          <input className="form-control" type="text" name="service" onChange={onServiceChange} />
          <select name="type" onChange={onChange}>
            <option value="offered">Offered </option>
            <option value="borrowed">Borrowed</option>
          </select>
          <Button variant="dark" size={"sm"} onClick={handleAddService}>Add Service</Button>
          <br></br>
          <br></br>
          <Button variant="dark" type="submit">Submit</Button>
        </form>

        <div className="info">
          <p className="formFields"> Service Borrowed </p>
          <ul>
            {serviceBorrowed.length ? (
              serviceBorrowed.map((service) => <li key={service}>{service}</li>)
            ) : (
              <span></span>
            )}
          </ul>
          <p className="formFields"> Service Offered</p>
          <ul>
            {serviceOffered.length ? (
              serviceOffered.map((service) => <li key={service}>{service}</li>)
            ) : (
              <span></span>
            )}
          </ul>
        </div>
        </Card.Body>
        </Card>
        </Col>
      </Row>
    );
  } else {
    return <span></span>;
  }
}

export default EntityInput;
