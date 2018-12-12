package com.onemda.onemdabackend.aop;

import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class ExceptionLoggingAspect {

	Logger LOGGER = LoggerFactory.getLogger(ExceptionLoggingAspect.class);
	
	
	@AfterThrowing(pointcut="com.onemda.onemdabackend.aop.SystemArchitecture.Repository() ||"
			+ "com.onemda.onemdabackend.aop.SystemArchitecture.Service()",
			throwing="ex")
	public void logException(Exception ex) {
		LOGGER.error("Exception Occured: "+ex);
	}
}
