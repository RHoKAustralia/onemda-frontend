import React from 'react';
import './index.css';

const getOptions=(dname, data)=>{
  return data.map((item, index)=>{
    return <><input type="radio" id={item.value} name={dname} value={item.value} /><label for={item.value}>{item.label}</label></>
  })
}
const RadioButtonMulti =(props)=> {
  return (
  <div class="form-group">    
    {getOptions(props.name, props.data)}
  </div>
  )
}

export default RadioButtonMulti;

