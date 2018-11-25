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


@CrossOrigin
@RestController
@RequestMapping("/api/onemda")
public class InstructorFeedbackController {
	
	@Autowired
	private InstructorFeedbackService instructorFeedbackService;

	@CrossOrigin
	@PostMapping("/instructorfeedback")
	public void postInstructorFeedback(@RequestBody InstructorFeedback instructorFeedback){
		instructorFeedback.setSubmittedAt(new Date());
		instructorFeedbackService.addInstructorFeedback(instructorFeedback);
	}
	
	@GetMapping("/instructorfeedback")
	public List<InstructorFeedback> getInstructorFeedback(){
		return instructorFeedbackService.getInstructorFeedback();
	}
	
}
