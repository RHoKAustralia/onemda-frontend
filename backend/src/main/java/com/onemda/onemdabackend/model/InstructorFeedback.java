package com.onemda.onemdabackend.model;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.onemda.onemdabackend.util.LocalDateDeserializer;

@Document(collection = "instructorfeedback")
public class InstructorFeedback {
	private String instructor_id;
	private String instructor_name;
	
	@JsonDeserialize(using=LocalDateDeserializer.class)
	private LocalDate session_date;
	private String session_time;
	
	@JsonDeserialize(using=LocalDateDeserializer.class)
	private LocalDate submittedAt;
	private String activity_name;
	private List<String> service_category;
	private List<Participant> participants;
	public String getInstructor_id() {
		return instructor_id;
	}
	public void setInstructor_id(String instructor_id) {
		this.instructor_id = instructor_id;
	}
	public String getInstructor_name() {
		return instructor_name;
	}
	public void setInstructor_name(String instructor_name) {
		this.instructor_name = instructor_name;
	}

	public String getSession_time() {
		return session_time;
	}
	public void setSession_time(String session_time) {
		this.session_time = session_time;
	}

	public String getActivity_name() {
		return activity_name;
	}
	public void setActivity_name(String activity_name) {
		this.activity_name = activity_name;
	}
	public List<String> getService_category() {
		return service_category;
	}
	public void setService_category(List<String> service_category) {
		this.service_category = service_category;
	}
	public List<Participant> getParticipants() {
		return participants;
	}
	public void setParticipants(List<Participant> participants) {
		this.participants = participants;
	}
	public LocalDate getSession_date() {
		return session_date;
	}
	public void setSession_date(LocalDate session_date) {
		this.session_date = session_date;
	}
	public LocalDate getSubmittedAt() {
		return submittedAt;
	}
	public void setSubmittedAt(LocalDate submittedAt) {
		this.submittedAt = submittedAt;
	}
	
	
}
