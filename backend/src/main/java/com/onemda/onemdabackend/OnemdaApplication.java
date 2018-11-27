package com.onemda.onemdabackend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource("classpath:/application.properties")
public class OnemdaApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnemdaApplication.class, args);
	}
}
