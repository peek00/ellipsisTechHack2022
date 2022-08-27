import { useCallback } from 'react';
import { Handle, Position,applyNodeChanges } from 'react-flow-renderer';



const handleStyle = { left: 10 };



function CustomNode({ data }) {
    

    let localNoOfActions = data.noOfActions;
    const handleKeyDown = (evt) => {
        if (evt.key === "Enter") {
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

  const information = data.info;

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">{data.label}</label>
        <input id="text" name="text" onKeyDown={handleKeyDown} /> 
        <div className="info">
            <ul>
                {information.length? information.map(info => (<li key={info.id}>{info.action}</li>)) : <span></span>} 
            </ul>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} />
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default CustomNode;
