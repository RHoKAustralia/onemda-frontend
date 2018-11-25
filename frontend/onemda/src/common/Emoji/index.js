import React from 'react';
import './styles.css'
const getEmo=(props)=>{
  const {data, name, id}= props
  return data? data.map((item, index)=>{
    return <div className="col-sm-4" key={index}>
    <input type="radio" id={id} name={name} value={props.value} className={item.label} key={item.value}/>
      </div>
  }):null
}

const Emoji =(props)=> {
  return (
    <div id="smileys">
      <div className="row">
        {getEmo(props)}
      </div>

    </div>
  )
}


export default Emoji;

