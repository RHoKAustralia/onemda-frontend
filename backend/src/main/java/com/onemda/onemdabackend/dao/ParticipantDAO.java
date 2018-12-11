package com.onemda.onemdabackend.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.onemda.onemdabackend.model.Participant;

public interface ParticipantDAO extends MongoRepository<Participant, String>{

}
