package com.onemda.onemdabackend.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.onemda.onemdabackend.model.ServiceCategory;


public interface ServiceCategoryDAO extends MongoRepository<ServiceCategory, String>{
	
}
