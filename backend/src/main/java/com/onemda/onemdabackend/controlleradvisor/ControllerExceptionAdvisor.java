package com.onemda.onemdabackend.controlleradvisor;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.onemda.onemdabackend.exception.ExceptionFormat;


@ControllerAdvice
public class ControllerExceptionAdvisor {

	@ExceptionHandler(Exception.class)
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	public @ResponseBody ExceptionFormat handleGenericException(
			final Exception exception, final HttpServletRequest request){

		ExceptionFormat genericErrorMessage = new ExceptionFormat();

		genericErrorMessage.setErrorCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
		genericErrorMessage.setErrorMessage("Generic Exception: Sorry, we encountered some issues while "
				+ "handling your request");
		genericErrorMessage.setCallerURI(request.getRequestURI());

		return genericErrorMessage;	
	}


}

