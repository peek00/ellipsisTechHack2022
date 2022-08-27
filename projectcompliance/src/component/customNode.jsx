import { useCallback } from 'react';
import { Handle, Position,applyNodeChanges } from 'react-flow-renderer';



const handleStyle = { left: 10 };



function CustomNode({ data }) {
    
    let serviceType = "Offered";
    let localNoOfActions = data.noOfActions;
    const handleKeyDown = (evt) => {
        if (evt.key === "Enter") {
          //console.log(type);
            //Check if empty string
            if (evt.target.value.length != 0) {
                console.log(evt.target.value)
                //Add it into data
                data.info.push({
                    id:(localNoOfActions + 1),
                    action:evt.target.value.toString()
                })
                localNoOfActions += 1;
                //Clearing input
                evt.currentTarget.value = "";


            } else {
                console.log("the fuck");
            }
        }

  };
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  });

  const information = data.info;

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
        <input type="submit" hidden />

        <div className="info">
            <h2>Service Borrowed</h2>
            <ul>
                {information.length? information.map(info => (<li key={info.id}>{info.action}</li>)) : <span></span>} 
            </ul>
            <h2>Service Offered</h2> 
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default CustomNode;
