package com.onemda.onemdabackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onemda.onemdabackend.model.ServiceCategory;
import com.onemda.onemdabackend.service.CategoryService;


@CrossOrigin
@RestController
@RequestMapping("/api/onemda")
public class CategoryServiceController {
	
	@Autowired
	private CategoryService categoryService;
	
	@CrossOrigin
	@GetMapping("/categories")
	public List<ServiceCategory> getAllServiceCategories(){
		System.out.println("I am here");
		return categoryService.getAllTheServiceCategory();
	}
	
}
