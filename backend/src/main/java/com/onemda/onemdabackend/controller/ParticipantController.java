package com.onemda.onemdabackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onemda.onemdabackend.model.Participant;
import com.onemda.onemdabackend.service.ParticipantService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/api/onemda")
@Api(description = "Set of endpoints for dealing with participants")
public class ParticipantController {

    @Autowired
    private ParticipantService participantService;

    @CrossOrigin
    @GetMapping("/participants")
    @ApiOperation("Returns list of all the participants")
    public List<Participant> getAllTheParticipants(){
        return participantService.getAllTheParticipants();
    }

}
