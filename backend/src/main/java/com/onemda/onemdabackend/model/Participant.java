package com.onemda.onemdabackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Participant {
	
	@JsonProperty(value="participant_id")
	private String participantId;
	
	@JsonProperty(value="participant_name")
	private String participantName;
	
	@JsonProperty(value="instructor_feedback")
	private String instructorFeedback;
	
	@JsonProperty(value="instructor_comment")
	private String instructorComment;
	
	@JsonProperty(value="participant_feedback")
	private String participantFeedback;

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

	public String getInstructorFeedback() {
		return instructorFeedback;
	}

	public void setInstructorFeedback(String instructorFeedback) {
		this.instructorFeedback = instructorFeedback;
	}

	public String getInstructorComment() {
		return instructorComment;
	}

	public void setInstructorComment(String instructorComment) {
		this.instructorComment = instructorComment;
	}

	public String getParticipantFeedback() {
		return participantFeedback;
	}

	public void setParticipantFeedback(String participantFeedback) {
		this.participantFeedback = participantFeedback;
	}

}
