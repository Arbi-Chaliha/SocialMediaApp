package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@GetMapping("/")
	public String homeControllerHandler() {
		return "This is home controller";
	}

	@GetMapping("/home")
	public String homeControllerHandler2() {
		return "This is home controller2";
	}

	@GetMapping("/about")
	public String homeControllerHandler3() {
		return "This is home controller3";
	}
}
