package com.onemda.onemdabackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class OnemdaController {
	
	@GetMapping("/sayHello")
	public String sayHello() {
		return "Hello World";
	}

}
