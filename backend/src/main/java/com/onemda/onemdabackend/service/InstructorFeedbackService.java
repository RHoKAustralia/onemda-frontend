package com.onemda.onemdabackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onemda.onemdabackend.dao.InstructorFeedbackDAO;
import com.onemda.onemdabackend.model.InstructorFeedback;

@Service
public class InstructorFeedbackService {

	@Autowired
	private InstructorFeedbackDAO instructorFeedbackDAO;
	
	
	public void addInstructorFeedback(InstructorFeedback feedback) {
		instructorFeedbackDAO.save(feedback);
	}
	
	public List<InstructorFeedback> getInstructorFeedback() {
		return instructorFeedbackDAO.findAll();
	}
	
	
	
}
