import React, {Component} from 'react';
import SelectBox from '../../common/SelectBox/index'
import * as constants from '../../constants/enumeration'
import RadioButtonMulti from '../../common/RadioButtonMulti/index'
import SelectableButtonGroup from '../../common/SelectableButtonGroup/index'
import OnemdaForm from '../OnemdaForm/index'
import Emoji from '../../common/Emoji/index'
import * as stubbedData from './jsonStubbed'
import './index.css'
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      newProgramDetails: {
        instructor_id : "11090442",
        instructor_name:"John Doe",
        program: "",
        subCategory: "",
        submittedAt:"",
        learning:'',
        social:'',
        health:''
      },
      categoryData:[],
      categoryFormData: [],
      HealthCategories:[],
      SocialCategories:[],
      LearningCategories:[],
      activityData:null,
      submittedData:null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.state={
    //   newProgramDetails:{
    //     "instructor_id" : "ABC123",
    //     "instructor_name" : "ABC123",
    //     "session_date": "23-11-2018",
    //     "session_time":"Morning",
    //     "submittedAt": "23-11-2018",
    //     "activity_name": "Cricket",
    //     "service_category" : ["Sport","Health"],
    //     "participants" : [
    //       {
    //         "participant_id" : "xyz123" ,
    //         "participant_name" : "Ankit Singh" ,
    //         "instructor_feedback" : "1",
    //         "instructor_comment" : "comments from instructor",
    //         "participant_feedback" : "1"
    //       },
    //       {
    //         "participant_id" : "xyz1234" ,
    //         "participant_name" : "NIkhil" ,
    //         "instructor_feedback" : "1",
    //         "instructor_comment" : "comments from instructor",
    //         "participant_feedback" : "1"
    //       }
    //     ]
    //   }
    // }
  }

  componentDidMount() {
    fetch('http://localhost:8099/api/onemda/categories')
      .then(response => response.json())
      .then(myJson => {
        this.setState({categoryFormData: myJson})
        console.log(myJson)
        console.log('data above')
        //let data = stubbedData.STUBBED
        let data = myJson
        if(data && data.length>0){
          let service_category =[{'value': '', 'label': 'Select one'}]
          let SocialCategories =[{'value': '', 'label': 'Select one'}]
          let LearningCategories=[{'value': '', 'label': 'Select one'}]
          let HealthCategories=[{'value': '', 'label': 'Select one'}]
          data.forEach((item)=>{
            service_category.push({'value': item.service_category, 'label': item.service_category})
            if(item.service_category === 'Learning'){
              item.activities.forEach((item)=>{
                LearningCategories.push({'value': item.activity_name, 'label': item.activity_name})
              })
            }
            if(item.service_category === 'Health & Wellbeing'){
              item.activities.forEach((item)=>{
                HealthCategories.push({'value': item.activity_name, 'label': item.activity_name})
              })
            }
            if(item.service_category === 'Social and Rec'){
              item.activities.forEach((item)=>{
                SocialCategories.push({'value': item.activity_name, 'label': item.activity_name})
              })
            }
          })
          this.setState(prevState => ({
            categoryData: [...prevState.categoryData, ...service_category],
            LearningCategories: [...prevState.categoryData, ...LearningCategories],
            HealthCategories: [...prevState.categoryData, ...HealthCategories],
            SocialCategories: [...prevState.categoryData, ...SocialCategories]
          }))
        }
        })

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

  getCategories=()=>{
    if(this.state.newProgramDetails && this.state.newProgramDetails.program === 'Learning'){
      return this.state.LearningCategories
    } else if(this.state.newProgramDetails && this.state.newProgramDetails.program === 'Social and Rec'){
      return this.state.SocialCategories
    } else if(this.state.newProgramDetails && this.state.newProgramDetails.program === 'Health & Wellbeing'){
      return this.state.HealthCategories
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
    console.log('submitting')

    const randomInstructorID = "ABC"+Math.floor((Math.random() * 1000) + 1);
    const data = {
      "instructor_id" : randomInstructorID,
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
    const {instructor_id} = this.state.newProgramDetails

    const options1 = ['Disengaged', 'Neutral', 'Engaged']
    const options2 = ['Morning', 'Afternoon']
    return (
      [<div className="container-fluid roles-div">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="row pd-2per">
                <div className="col-sm-12">
                  <span className="subnav-label-color">Instructor Name:</span>
                  <span className="label-color"> Linda Robinson</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row pd-2per">
                <div className="col-sm-12 text-right">
                  <span className="subnav-label-color">Instructor Id:</span>
                  <span className="label-color"> 976</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      <div className="container-fluid">
        <div className="container">
          <OnemdaForm categoryData = {this.state.categoryFormData} handleSubmit={this.handleSubmit}/>




          <form className="form-horizontal m-top-2rem" onSubmit={this.handleSubmit}>
            <SelectBox
              label="Service category: "
              id="program"
              name="program"
              value={this.state.newProgramDetails.program}
              //data={constants.ProgramCategory}
              data={this.state.categoryData}
              handleChange={this.handleInput}/>
            {this.isCategoryPresent() && <SelectBox
              label="Activity: "
              id="subCategory"
              name="subCategory"
              value={this.state.newProgramDetails.subCategory}
              data={this.getCategories()}
              handleChange={this.handleInput}/>}
            <div className="form-group row">
              <label htmlFor='date' className="col-sm-2 col-form-label">Date: </label>
              <div className="col-sm-9">
                <input type='date' className="form-control" id='date' name='date'/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor='session' className="col-sm-2 col-form-label">Session</label>
              <div className="col-sm-6" id="session">
                <RadioButtonMulti
                  label="choose one"
                  id="session"
                  className="WIDTH100"
                  name="developmentOutcome"
                  data={constants.TimeConvention}/>
              </div>
            </div>
            <SelectBox
              label="Name of client: "
              id="program"
              name="program"
              value={this.state.newProgramDetails.program}
              data={constants.ClientNames}
              handleChange={this.handleInput}/>
            <div className="row">
              <div className="col-sm-12">
                <p><b>Learning - </b>Onemda will suport me with everyday learning that promotes my independence and personal development over the next 12 months</p>
              </div>
              <div className="col-sm-12">
                <RadioButtonMulti
                  label="choose one"
                  id="learning"
                  value={this.state.newProgramDetails.learning}
                  name="learning"
                  data={constants.PersonalDevelopmentOutComes}/>
              </div>
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="2" id="learningComment" placeholder="Comments"></textarea>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <p><b>SOCIAL AND RECREATIONAL - </b>Onemda will support me with social and rexcreational opportunities that promote my independence and personal developement of the next
                  12 months</p>
              </div>
              <div className="col-sm-12">
                <RadioButtonMulti
                  label="choose one"
                  id="social"
                  name="social"
                  value={this.state.newProgramDetails.social}
                  data={constants.PersonalDevelopmentOutComes}/>
              </div>
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="2" id="socialComment" placeholder="Comments"></textarea>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <p><b>HEALTH AND WELLBEING -  </b>Onemda will support me through opportunites to enrich
                  my health and wellbeing over the next 12 months</p>
              </div>
              <div className="col-sm-12">
                <RadioButtonMulti
                  label="choose one"
                  id="health"
                  name="health"
                  value={this.state.newProgramDetails.health}
                  data={constants.PersonalDevelopmentOutComes}/>
              </div>
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="2" id="healthComment" placeholder="Comments"></textarea>
            </div>

            <div className="form-group row">
              <div className="col-sm-12 mb-20px">
                <h3>My Enjoyment in learning activities is:</h3>
                </div>
              <div className="col-sm-12">
                <Emoji
                  id="emotions"
                  name="smilyes"
                  value={this.state.newProgramDetails.subCategory}
                  data={constants.Emotions}

                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12">
                <h3>My Participation in learning activities is:</h3></div>
              <div className="col-sm-12 mt-20px">
                <Emoji
                  id="emotions"
                  name="participation"
                  value={this.state.newProgramDetails.subCategory}
                  data={constants.Emotions}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12 text-center">
                <button type="submit" className="btn-submit">Submit</button>
              </div>

            </div>
          </form>
        </div>
      </div>
        ]

    )
  }
}

export default Login;