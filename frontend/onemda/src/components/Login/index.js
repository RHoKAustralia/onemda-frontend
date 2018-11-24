import React, {Component} from 'react';
import SelectBox from '../../common/SelectBox/index'
import * as constants from '../../constants/enumeration'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      newProgramDetails: {
        program: "",
        subCategory: "",
      },
      submittedData:null
    }
  }
  handleInput=(e)=> {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
        newProgramDetails: {...prevState.newProgramDetails, [name]: value}
      }),
      () => console.log(this.state.newProgramDetails)
    );
  }

  loginSubmitHandler=()=>{

  }
  getCategories=()=>{
    if(this.state.newProgramDetails && this.state.newProgramDetails.program === 'Learning'){
      return constants.LearningCategories
    } else if(this.state.newProgramDetails && this.state.newProgramDetails.program === 'Social & Rec'){
      return constants.SocialCategories
    } else if(this.state.newProgramDetails && this.state.newProgramDetails.program === 'Health & Wellbeing'){
      return constants.HealthCategories
    } else {}
  }

  isCategoryPresent=()=>{
    if(this.state.newProgramDetails && this.state.newProgramDetails.program){
      return true
    } else {
      return false
    }
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <h2>Fill your details</h2>
        </div>
        <form className="form-horizontal">
          <SelectBox
            label="Program: "
            id="program"
            name="program"
            value={this.state.newProgramDetails.program}
            data={constants.ProgramCategory}
            handleChange={this.handleInput}/>
          {this.isCategoryPresent() && <SelectBox
            label=""
            id="subCategory"
            name="subCategory"
            value={this.state.newProgramDetails.subCategory}
            data={this.getCategories()}
            handleChange={this.handleInput}/>}
        </form>
      </div>
    )
  }
}

export default Login;