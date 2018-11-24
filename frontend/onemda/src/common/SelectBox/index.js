import React from 'react';

const getOptions=(data)=>{
  return data ? data.map((item, index)=>{
    return <option value={item.value} key={index}>{item.label}</option>
  }):null
}
const SelectBox =(props)=> {
  return (
  <div className="form-group row">
    <label className="col-sm-2" htmlFor={props.id}>{props.label}</label>
    <select className="form-control col-sm-6" id={props.id} name={props.name} onChange={props.handleChange} value={props.value}>
      {getOptions(props.data)}
    </select>
  </div>
  )
}

export default SelectBox;

