package com.onemda.onemdabackend.aop;

import org.aspectj.lang.annotation.Pointcut;

public class SystemArchitecture {

	//Any class annotated with @Repository
	@Pointcut("execution(* (@org.springframework.stereotype.Repository *).*(..))")
	public void Repository() {

	}
	
	@Pointcut("execution(* (@org.springframework.stereotype.Service *).*(..))")
	public void Service() {

	}
}
