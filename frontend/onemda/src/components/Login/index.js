import React from 'react';
import SelectBox from '../../common/SelectBox/index'
import * as constants from '../../constants/enumeration'
const Login =(props)=> {
  const loginSubmitHandler=()=>{
    props.onSubmit('hello')
  }
  return (
    <div className="container">
      <h2>Register form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
        </div>
        <SelectBox
          label="choose one"
          id="timeConverstion"
          name="timeConverstion"
          data={constants.TimeConvention}/>
        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember"/> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={loginSubmitHandler} >Submit</button>
      </form>
    </div>
  )
}

export default Login;