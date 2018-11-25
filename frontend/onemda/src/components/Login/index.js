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

    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      "instructor_id" : "ABC12345",
      "instructor_name" : "ABC123",
      "session_date": "23-11-2018",
      "session_time":"Morning",
      "submittedAt": "23-11-2018",
      "activity_name": "Cricket",
      "service_category" : ["Sport","Health"],
      "participants" : [
                            {
                              "participant_id" : "xyz123" ,
                              "participant_name" : "Ankit Singh" ,
                              "instructor_feedback" : "1",
                              "instructor_comment" : "comments from instructor",
                              "participant_feedback" : "1"
                            },
                            {
                              "participant_id" : "xyz1234" ,
                              "participant_name" : "NIkhil" ,
                              "instructor_feedback" : "1",
                              "instructor_comment" : "comments from instructor",
                              "participant_feedback" : "1"
                            }
                        ]
     }

    fetch('http://localhost:8099/api/onemda/instructorfeedback', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    console.log('submitted')
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
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;