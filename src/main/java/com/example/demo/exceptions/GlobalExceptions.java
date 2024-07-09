package com.example.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptions {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorDetails> otherExceptionHandler(Exception ue, WebRequest req)
    {
        ErrorDetails error = new ErrorDetails(ue.getMessage(),req.getDescription(false), LocalDateTime.now());
      return new ResponseEntity<ErrorDetails>(error, HttpStatus.BAD_REQUEST);
    }
}
