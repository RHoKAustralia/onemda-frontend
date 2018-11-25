package com.onemda.onemdabackend.model;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Document(collection = "instructorfeedback")
public class InstructorFeedback {
	
	@JsonProperty(value="instructor_id")
	private String instructorId;
	
	@JsonProperty(value="instructor_name")
	private String instructorName;
	
	@JsonProperty(value="session_date")
	@JsonFormat(shape = Shape.STRING, pattern="dd-MM-yyyy")
	private LocalDate sessionDate;
	
	@JsonProperty(value="session_time")
	private String sessionTime;
	
	@JsonProperty(value="submittedAt")
	@JsonFormat(shape = Shape.STRING, pattern="dd-MM-yyyy")
	private Date submittedAt;
	
	@JsonProperty(value="activity_name")
	private String activityName;
	
	@JsonProperty(value="service_category")
	private List<String> serviceCategory;
	
	@JsonProperty(value="participants")
	private List<Participant> participants;

	public String getInstructorId() {
		return instructorId;
	}

	public void setInstructorId(String instructorId) {
		this.instructorId = instructorId;
	}

	public String getInstructorName() {
		return instructorName;
	}

	public void setInstructorName(String instructorName) {
		this.instructorName = instructorName;
	}

	public LocalDate getSessionDate() {
		return sessionDate;
	}

	public void setSessionDate(LocalDate sessionDate) {
		this.sessionDate = sessionDate;
	}

	public String getSessionTime() {
		return sessionTime;
	}

	public void setSessionTime(String sessionTime) {
		this.sessionTime = sessionTime;
	}

	public Date getSubmittedAt() {
		return submittedAt;
	}

	public void setSubmittedAt(Date submittedAt) {
		this.submittedAt = submittedAt;
	}

	public String getActivityName() {
		return activityName;
	}

	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}

	public List<String> getServiceCategory() {
		return serviceCategory;
	}

	public void setServiceCategory(List<String> serviceCategory) {
		this.serviceCategory = serviceCategory;
	}

	public List<Participant> getParticipants() {
		return participants;
	}

	public void setParticipants(List<Participant> participants) {
		this.participants = participants;
	}

}
