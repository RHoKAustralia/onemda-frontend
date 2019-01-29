package com.onemda.onemdabackend.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onemda.onemdabackend.model.InstructorFeedback;
import com.onemda.onemdabackend.service.InstructorFeedbackService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;


@CrossOrigin
@RestController
@RequestMapping("/api/onemda")
@Api(description = "Set of endpoints for getting and posting instructor feedbacks")
public class InstructorFeedbackController {
	
	@Autowired
	private InstructorFeedbackService instructorFeedbackService;

	@CrossOrigin
	@PostMapping("/instructorfeedback")
	@ApiOperation("Add instructor feedback into database")
	public void postInstructorFeedback(@ApiParam("Instructor feedback to be added") @RequestBody InstructorFeedback instructorFeedback){
		instructorFeedback.setSubmittedAt(new Date());
		instructorFeedbackService.addInstructorFeedback(instructorFeedback);
	}
	
	@GetMapping("/instructorfeedback")
	@ApiOperation("Returns all the instructor feedbacks available")
	public List<InstructorFeedback> getInstructorFeedback(){
		return instructorFeedbackService.getInstructorFeedback();
	}
	
}
