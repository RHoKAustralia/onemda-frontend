package com.onemda.onemdabackend.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

@Component
@Aspect
public class PerformanceAspect {
	
	Logger LOGGER = LoggerFactory.getLogger(PerformanceAspect.class);
	
	@Around("com.onemda.onemdabackend.aop.SystemArchitecture.Repository()")
	public void logPerformance(ProceedingJoinPoint joinPoint) throws Throwable {
		String methodInformation = joinPoint.getStaticPart().getSignature().toString();
		
		StopWatch stopWatch = new StopWatch(methodInformation);
		stopWatch.start();
		
		try {
			joinPoint.proceed();
		} catch (Exception e) {
			// TODO: handle exception
		}finally {
			stopWatch.stop();
			LOGGER.info(stopWatch.shortSummary());
		}
	}
}
