import React from 'react';
import './index.css';

const getOptions=(dname,id, data)=>{
  return data ? data.map((item, index)=>{
    return <React.Fragment key={index}>
    <input type="radio" id={id+index} name={dname} value={item.value} />
    <label htmlFor={id+index}>{item.label}</label></React.Fragment>
  }) :null
}
const RadioButtonMulti =(props)=> {
  return (
  <div className="form-group" id={props.className === 'WIDTH100' ? 'WIDTH100' :"radioGroup"}>
    {getOptions(props.name, props.id, props.data)}
  </div>
  )
}

export default RadioButtonMulti;

