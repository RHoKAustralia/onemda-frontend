package com.onemda.onemdabackend.exception;

public class ExceptionFormat {
	
	private int errorCode;
	private String errorMessage;
	private String callerURI;
	public int getErrorCode() {
		return errorCode;
	}
	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	public String getCallerURI() {
		return callerURI;
	}
	public void setCallerURI(String callerURI) {
		this.callerURI = callerURI;
	}
	@Override
	public String toString() {
		return "ExceptionFormat [errorCode=" + errorCode + ", errorMessage=" + errorMessage + ", callerURI=" + callerURI
				+ "]";
	}
}
