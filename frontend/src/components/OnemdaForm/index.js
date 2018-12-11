import React from 'react'
import PropTypes from 'prop-types'
import SelectableButtonGroup from '../../common/SelectableButtonGroup/index'
import SelectableButtonGroupWithLabel from '../../common/SelectableButtonGroupWithLabel/index'
import SelectBoxWithLabel from '../../common/SelectBoxWithLabel/index'
import Date from '../../common/Date/index'
import TextBox from '../../common/TextBox/index'
import TextWithCaption from '../../common/TextWithCaption/index'
import Emoji from '../../common/Emoji/index'

class OnemdaForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categoryData: [],
      sessionDate: '',
      sessionTime: '',
      submittedAt: '',
      activityName: '',
      serviceCategory: [],
      activityCategoryNames: [],
      participantName: '',
      instructorFeedback: '',
      instructorCommentLearning: '',
      instructorCommentSocial: '',
      instructorCommentHealth: '',
      participantFeedback: '',
      data: {},
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDate = this.handleChangeDate.bind(this)
    this.handleChangeHealthComment = this.handleChangeHealthComment.bind(this)
    this.handleChangeLearningComment = this.handleChangeLearningComment.bind(this)
    this.handleChangeSocialComment = this.handleChangeSocialComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeSelectBoxServiceCategory = this.handleChangeSelectBoxServiceCategory.bind(this)
    this.handleChangeSBGSessionTime= this.handleChangeSBGSessionTime.bind(this)
    this.handleChangeSelectBoxActivityName = this.handleChangeSelectBoxActivityName.bind(this)
  }

  componentWillReceiveProps(props) {
    const categoryData = this.props.categoryData
    this.setState({categoryData: categoryData})
    const serviceCategory = categoryData[0] ? categoryData[0] : []
    const activityCategories = serviceCategory.activities ? serviceCategory.activities : []

    const activityCategoryNames = activityCategories.map((activity) => {
      return activity.activity_name
    })

    const selectedActivity = activityCategoryNames[0] ? activityCategoryNames[0] : ''
    
    this.setState({
      activityCategoryNames: activityCategoryNames,
      activityName: selectedActivity
    })
  }

  handleChange(e) {
    console.log(e.target.value)
  }

  handleChangeDate(e) {
    console.log(e.target.value)
    this.setState({sessionDate: e.target.value})
  }

  handleChangeLearningComment(e) {
    this.setState({instructorCommentLearning: e.target.value})
  }

  handleChangeSocialComment(e) {
    this.setState({instructorCommentSocial: e.target.value})
  }

  handleChangeHealthComment(e) {
    this.setState({instructorCommentHealth: e.target.value})
  }

  handleChangeSelectBoxServiceCategory(e) {
    const serviceCategoryName = e.target.value
    const serviceCategory = this.state.categoryData.filter((category) => {
      return category.service_category == serviceCategoryName
    })

    const activityCategories = serviceCategory[0] ? serviceCategory[0].activities : []

    const activityCategoryNames = activityCategories.map((activity) => {
      return activity.activity_name
    })

    const selectedActivity = activityCategoryNames[0] ? activityCategoryNames[0] : ''
    
    this.setState({
      serviceCategory: e.target.value,
      activityCategoryNames: activityCategoryNames,
      activityName: selectedActivity
    })
  }

  handleChangeSelectBoxActivityName(e) {
    this.setState({
      activityName: e.target.value
    })
  }

  handleChangeSBGSessionTime(time) {
    console.log(time)
    this.setState({sessionTime: time})
  }

  filterServiceCategoryForActivityName(activityName, serviceCategory) {
    const activities = serviceCategory.activities ? serviceCategory.activities : []
    const activityMatched = activities.filter((activity) => {
      return activity.activity_name == activityName
    })
    return (activityMatched.length == 0) ? false : true
  }

  handleSubmit(e) {
    e.preventDefault()

    const randomInstructorID = "ABC"+Math.floor((Math.random() * 1000) + 1);

    const serviceCategories = this.state.categoryData.filter((serviceCategory) => {
      return this.filterServiceCategoryForActivityName(this.state.activityName, serviceCategory)
    })

    var data = {
      "instructor_id" : randomInstructorID,
      "instructor_name" : "ABC123",
      "session_date": this.state.sessionDate,
      "session_time": this.state.sessionTime,
      "submittedAt": "23-11-2018",
      "activity_name": this.state.activityName,
      "service_category" : [],
      "participants" : [
                            {
                              "participant_id" : "xyz123" ,
                              "participant_name" : "Ankit Singh" ,
                              "instructor_feedback" : "1",
                              "instructor_comment" : this.state.instructorCommentHealth,
                              "participant_feedback" : "1"
                            },
                            {
                              "participant_id" : "xyz1234" ,
                              "participant_name" : "NIkhil" ,
                              "instructor_feedback" : "1",
                              "instructor_comment" : this.state.instructorCommentHealth,
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

    console.log('submitting for realz')
  }

  render() {

    const { categoryData } = this.props
    const categories = categoryData.map((category) => {
      return category.service_category
    })

    const options1 = ['Disengaged', 'Neutral', 'Engaged']
    const options2 = ['Morning', 'Afternoon']

    return (
      <form onSubmit={this.handleSubmit}>
        <SelectBoxWithLabel category='Service Category' options={categories} handleChange={this.handleChangeSelectBoxServiceCategory}></SelectBoxWithLabel>
        <Date handleChange={this.handleChangeDate}></Date>
        <SelectableButtonGroupWithLabel handleChange={this.handleChangeSBGSessionTime}  label='Session Time' options={options2}></SelectableButtonGroupWithLabel>
        <SelectBoxWithLabel category='Activity Name' options={this.state.activityCategoryNames} handleChange={this.handleChangeSelectBoxActivityName}></SelectBoxWithLabel>
        <TextWithCaption heading='LEARNING' text=' Onemda will suport me with everyday learning that promotes my independence and personal development over the next 12 months'></TextWithCaption>
        <SelectableButtonGroup handleChange={() => {}} options={options1}></SelectableButtonGroup>
        <TextBox handleChange={this.handleChangeLearningComment}></TextBox>
        <TextWithCaption heading='SOCIAL AND RECREATIONAL' text='Onemda will support me through opportunites to enrich my health and wellbeing over the next 12 months'></TextWithCaption>
        <SelectableButtonGroup handleChange={() => {}} options={options1}></SelectableButtonGroup>
        <TextBox handleChange={this.handleChangeSocialComment}></TextBox>
        <TextWithCaption heading='HEALTH AND WELLBEING' text='Onemda will support me through opportunites to enrich my health and wellbeing over the next 12 months'></TextWithCaption>
        <SelectableButtonGroup handleChange={() => {}} options={options1}></SelectableButtonGroup>
        <TextBox handleChange={this.handleChangeHealthComment}></TextBox>

        {/* <Emoji id="emotions" name="participation" value={this.state.newProgramDetails.subCategory} data={constants.Emotions}/> */}
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    )
  }
}

export default OnemdaForm