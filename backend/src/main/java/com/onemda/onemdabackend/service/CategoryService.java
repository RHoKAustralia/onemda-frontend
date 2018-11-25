package com.onemda.onemdabackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onemda.onemdabackend.dao.ServiceCategoryDAO;
import com.onemda.onemdabackend.model.ServiceCategory;

@Service
public class CategoryService {
	
	@Autowired
	private ServiceCategoryDAO serviceCategoryDAO;
	
	
	public List<ServiceCategory> getAllTheServiceCategory(){
		return serviceCategoryDAO.findAll();
	}
}
