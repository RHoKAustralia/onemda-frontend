package com.onemda.onemdabackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Activity {
	
	@JsonProperty(value = "activity_id")
	private String activityId;
	
	@JsonProperty(value = "activity_name")
	private String activityName;
	
	public String getActivityId() {
		return activityId;
	}
	public void setActivityId(String activityId) {
		this.activityId = activityId;
	}
	public String getActivityName() {
		return activityName;
	}
	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}
	
	
}
