package com.onemda.onemdabackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "participants")
public class Participant {

	@JsonProperty(value="p_id")
	private String participantId;
	
	@JsonProperty(value="p_fname")
	private String participantName;

	public String getParticipantId() {
		return participantId;
	}

	public void setParticipantId(String participantId) {
		this.participantId = participantId;
	}

	public String getParticipantName() {
		return participantName;
	}

	public void setParticipantName(String participantName) {
		this.participantName = participantName;
	}

}
