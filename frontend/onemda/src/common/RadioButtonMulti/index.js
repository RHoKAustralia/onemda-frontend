import React from 'react';
import './index.css';

const getOptions=(dname, data)=>{
  return data ? data.map((item, index)=>{
    return <React.Fragment key={index}>
    <input type="radio" id={item.value} name={dname} value={item.value} />
    <label htmlFor={item.value}>{item.label}</label></React.Fragment>
  }) :null
}
const RadioButtonMulti =(props)=> {
  return (
  <div className="form-group" id="radioGroup">
    {getOptions(props.name, props.data)}
  </div>
  )
}

export default RadioButtonMulti;

