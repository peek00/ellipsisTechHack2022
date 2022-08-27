import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div>
        <h2>Entity</h2>
        <form onSubmit={handleSubmit}>
          Name
          <input
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
          <br></br>
          Country
          <select name="country">
            <option value="singapore">Singapore</option>
            <option value="notSingapore">Not Singapore</option>
          </select>
          <br></br>
          Service
          <input type="text" name="service" onChange={onServiceChange} />
          <select name="type" onChange={onChange}>
            <option value="offered">Offered </option>
            <option value="borrowed">Borrowed</option>
          </select>
          <button onClick={handleAddService}>Add Service</button>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>

        <div className="info">
          <h2>Service Borrowed</h2>
          <ul>
            {serviceBorrowed.length ? (
              serviceBorrowed.map((service) => <li key={service}>{service}</li>)
            ) : (
              <span></span>
            )}
          </ul>
          <h2>Service Offered</h2>
          <ul>
            {serviceOffered.length ? (
              serviceOffered.map((service) => <li key={service}>{service}</li>)
            ) : (
              <span></span>
            )}
          </ul>
        </div>
      </div>
    );
  } else {
    return <span></span>;
  }
}

export default EntityInput;
