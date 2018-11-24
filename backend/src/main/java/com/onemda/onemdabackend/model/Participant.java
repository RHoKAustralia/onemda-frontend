package com.onemda.onemdabackend.model;

public class Participant {
	
	private String participant_id;
	private String participant_name;
	private String instructor_feedback;
	private String instructor_comment;
	private String participant_feedback;
	/**
	 * @return the participant_id
	 */
	public String getParticipant_id() {
		return participant_id;
	}
	/**
	 * @param participant_id the participant_id to set
	 */
	public void setParticipant_id(String participant_id) {
		this.participant_id = participant_id;
	}
	/**
	 * @return the participant_name
	 */
	public String getParticipant_name() {
		return participant_name;
	}
	/**
	 * @param participant_name the participant_name to set
	 */
	public void setParticipant_name(String participant_name) {
		this.participant_name = participant_name;
	}
	/**
	 * @return the instructor_feedback
	 */
	public String getInstructor_feedback() {
		return instructor_feedback;
	}
	/**
	 * @param instructor_feedback the instructor_feedback to set
	 */
	public void setInstructor_feedback(String instructor_feedback) {
		this.instructor_feedback = instructor_feedback;
	}
	/**
	 * @return the instructor_comment
	 */
	public String getInstructor_comment() {
		return instructor_comment;
	}
	/**
	 * @param instructor_comment the instructor_comment to set
	 */
	public void setInstructor_comment(String instructor_comment) {
		this.instructor_comment = instructor_comment;
	}
	/**
	 * @return the participant_feedback
	 */
	public String getParticipant_feedback() {
		return participant_feedback;
	}
	/**
	 * @param participant_feedback the participant_feedback to set
	 */
	public void setParticipant_feedback(String participant_feedback) {
		this.participant_feedback = participant_feedback;
	}

}
