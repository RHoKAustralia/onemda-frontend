package com.onemda.onemdabackend.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection="serviceactivitymap")
public class ServiceCategory {
	
	@JsonProperty(value="service_category_id")
	private String serviceCategoryId;
	
	@JsonProperty(value="service_category")
	private String serviceCategory;
	
	@JsonProperty(value = "activities")
	private List<Activity> activities;
	
	public String getServiceCategoryId() {
		return serviceCategoryId;
	}
	public void setServiceCategoryId(String serviceCategoryId) {
		this.serviceCategoryId = serviceCategoryId;
	}
	public String getServiceCategory() {
		return serviceCategory;
	}
	public void setServiceCategory(String serviceCategory) {
		this.serviceCategory = serviceCategory;
	}
	public List<Activity> getActivities() {
		return activities;
	}
	public void setActivities(List<Activity> activities) {
		this.activities = activities;
	}
	
}
