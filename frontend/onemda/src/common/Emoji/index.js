import React from 'react';
import './styles.css'
const getEmo=(props)=>{
  const {data, name, id}= props
  return data? data.map((item)=>{
    return <input type="radio" id={id} name={name} value={props.value} className={item.label} key={item.value}/>
  }):null
}

const Emoji =(props)=> {
  return (
    <div id="smileys">
      {getEmo(props)}
    </div>
  )
}


export default Emoji;

