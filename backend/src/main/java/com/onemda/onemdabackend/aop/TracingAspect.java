package com.onemda.onemdabackend.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class TracingAspect {

	Logger LOGGER = LoggerFactory.getLogger(TracingAspect.class);

	@Before("com.onemda.onemdabackend.aop.SystemArchitecture.Repository() ||"
			+ "com.onemda.onemdabackend.aop.SystemArchitecture.Service()")
	public void logTheEntry(JoinPoint joinPoint ) {
		LOGGER.info("Entering into : "+joinPoint.getStaticPart().getSignature().toString());
	}
	
	@After("com.onemda.onemdabackend.aop.SystemArchitecture.Repository() ||"
			+ "com.onemda.onemdabackend.aop.SystemArchitecture.Service()")
	public void logTheExit(JoinPoint joinPoint ) {
		LOGGER.info("Exiting from : "+joinPoint.getStaticPart().getSignature().toString());
	}
}
