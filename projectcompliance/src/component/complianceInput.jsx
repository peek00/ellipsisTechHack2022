import { useCallback, useState } from "react";

import EntityInput from "./entityInput";
import CustomerInput from "./customerInput";

function ComplianceInput() {
  const [type, setType] = useState("customer");
  const onChange = useCallback((evt) => {
    //Update service type without pressing enter
    setType(evt.target.value);
  });

  return (
    <div>
      <h1>Compliance Checker</h1>
      <select name="type" onChange={onChange}>
        <option value="customer">Customer </option>
        <option value="entity">Entity</option>
      </select>
      <CustomerInput type={type} />
      <EntityInput type={type} />
    </div>
  );
}

export default ComplianceInput;
