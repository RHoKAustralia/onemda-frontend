import React from 'react';

const InputBox =(props)=> {
  return (
    <div class="form-group row">
      <label htmlFor={props.id}  class="col-sm-2 col-form-label mr-2">{props.label}</label>
      <div class="col-sm-6">
        <input type={props.type} class="form-control" id={props.id} name={props.name}/>
      </div>
    </div>
  )
}

export default InputBox;