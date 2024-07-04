package com.review.exceptions;

 public class SentimentAnalysisException extends RuntimeException {
public SentimentAnalysisException(String message, Throwable cause) {
   super(message, cause);
}
}