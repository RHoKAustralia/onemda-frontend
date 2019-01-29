package com.onemda.onemdabackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onemda.onemdabackend.model.ServiceCategory;
import com.onemda.onemdabackend.service.CategoryService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


@CrossOrigin
@RestController
@RequestMapping("/api/onemda")
@Api(description = "Set of endpoints for dealing with service categories")
public class CategoryServiceController {
	
	@Autowired
	private CategoryService categoryService;
	
	@CrossOrigin
	@GetMapping("/categories")
	@ApiOperation("Returns list of all the available service categories")
	public List<ServiceCategory> getAllServiceCategories(){
		return categoryService.getAllTheServiceCategory();
	}
	
}
