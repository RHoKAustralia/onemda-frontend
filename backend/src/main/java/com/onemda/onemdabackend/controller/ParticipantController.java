package com.onemda.onemdabackend.controller;

import java.util.List;

import com.onemda.onemdabackend.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onemda.onemdabackend.model.Participant;

@CrossOrigin
@RestController
@RequestMapping("/api/onemda")
public class ParticipantController {

    @Autowired
    private ParticipantService participantService;

    @CrossOrigin
    @GetMapping("/participants")
    public List<Participant> getAllTheParticipants(){
        return participantService.getAllTheParticipants();
    }

}
