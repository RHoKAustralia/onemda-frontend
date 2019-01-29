package com.onemda.onemdabackend.configuration;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2 
public class SpringFoxConfiguration {
	
	@Bean
	public Docket apiDocket() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.onemda.onemdabackend")) //it will generate documentation for controllers as well as models
				.paths(PathSelectors.any())
				.build()
				.apiInfo(getApiInfo()); // - This is to override default API infomation provided by Swagger
	}
	
	private ApiInfo getApiInfo() {
	    return new ApiInfo(
	            "Onemda API Details", //Title
	            "This is the API specification page of OneMda", //Description
	            "VERSION 1.0",
	            "TERMS OF SERVICE URL",
	            new Contact("OneMda","https://www.onemda.com.au/","onemda@onemda.com.au"),
	            "Reg No A0025065T",
	            "LICENSE URL",
	            Collections.emptyList()
	    );
	}
}
