import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerInput(type) {
  const [customerName, setName] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/complianceresult", { state: { name: customerName } });
  };

  if (type.type === "customer") {
    return (
      <div>
        <h2>Customer</h2>
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
          SSN / NRIC <input type="text" name="name" />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return <span></span>;
  }
}

export default CustomerInput;
