import React from 'react';

const getOptions=(data)=>{
  return data.map((item, index)=>{
    return <option value={item.value}>{item.label}</option>
  })
}
const SelectBox =(props)=> {
  return (
  <div class="form-group">
    <label for={props.id}>{props.label}</label>
    <select class="form-control" id={props.id} name={props.name}>
      {getOptions(props.data)}
    </select>
  </div>
  )
}

export default SelectBox;

