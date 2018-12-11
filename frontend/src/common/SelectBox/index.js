import React from 'react';

const getOptions=(data)=>{
  return data ? data.map((item, index)=>{
    return <option value={item.value} key={index}>{item.label}</option>
  }):null
}
const SelectBox =(props)=> {
  return (
  <div className="form-group row">
    <label className="col-sm-2 col-form-label" htmlFor={props.id}>{props.label}</label>
    <div className="col-sm-9">
      <select className="form-control col-sm-12" id={props.id} name={props.name} onChange={props.handleChange} value={props.value}>
        {getOptions(props.data)}
      </select>
    </div>
  </div>
  )
}

export default SelectBox;

