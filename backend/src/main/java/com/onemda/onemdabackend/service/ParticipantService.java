package com.onemda.onemdabackend.service;

import java.util.ArrayList;
import java.util.List;

import com.onemda.onemdabackend.dao.ParticipantDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onemda.onemdabackend.model.Participant;

@Service
public class ParticipantService {

    @Autowired
    private ParticipantDAO participantDAO;

    public List<Participant> getAllTheParticipants() {
//        List<Participant> participants = new ArrayList<>();
//
//        for (Participant participant: participants) {
//            System.out.println(participant.getParticipantName());
//        }
//
//        Participant p = new Participant();
//        p.setParticipantId("123");
//        p.setParticipantName("test");
//
//        participants.add(p);
//
//        return participants;


    	return participantDAO.findAll();
    }

}
