package com.onemda.onemdabackend.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.onemda.onemdabackend.model.InstructorFeedback;

public interface InstructorFeedbackDAO extends MongoRepository<InstructorFeedback, String>{

}
