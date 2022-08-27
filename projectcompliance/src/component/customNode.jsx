import { useCallback } from 'react';
import { Handle, Position,applyNodeChanges } from 'react-flow-renderer';



const handleStyle = { left: 10 };



function CustomNode({ data }) {
    
    let serviceType = "offered";
    const handleKeyDown = (evt) => {
        if (evt.key === "Enter") {
          //console.log(type);
            //Check if empty string
            if (evt.target.value.length !== 0) {
              if (serviceType === "offered") {
                data.serviceOffered.push(evt.target.value);
              } else if (serviceType === "borrowed") {
                data.serviceBorrowed.push(evt.target.value);
              }
                //Clearing input
              evt.currentTarget.value = "";
            }
        }

  };
  const onChange = useCallback((evt) => {
    //Update service type without pressing enter
    serviceType = evt.target.value;
  });

  

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text"><h1>{data.label}</h1></label>
        <input id="text" name="text" onKeyDown={handleKeyDown} /> 
        <select name="type" onChange={onChange}>
          <option value="offered" >Offered </option>
          <option value="borrowed">Borrowed</option>
        </select>

        <div className="info">
            <h2>Service Borrowed</h2>
            <ul>
              {data.serviceBorrowed.length? data.serviceBorrowed.map(service => (<li key={service}>{service}</li>)) : <span></span>} 
            </ul>
            <h2>Service Offered</h2> 
            <ul>
              {data.serviceOffered.length? data.serviceOffered.map(service => (<li key={service}>{service}</li>)) : <span></span>}
            </ul>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default CustomNode;
