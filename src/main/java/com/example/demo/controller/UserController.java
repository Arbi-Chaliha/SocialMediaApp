package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import com.example.demo.myrepository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.models.User;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
//Controllers ke andar sara endpoints define karte hai

@RestController
public class UserController {
	@Autowired
	UserRepository userRepository;
	
	@PostMapping("/users")//adding a new record in our database
	public User createUser(@RequestBody User user)
	{
		User newUser=new User();
		newUser.setEmail(user.getEmail());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setPassword(user.getPassword());
		newUser.setId(user.getId());
        return userRepository.save(newUser);
	}
	@GetMapping("/users")
	public List<User> getUsers() {
		
		List<User>users=new ArrayList<>();
		User user1=new User(1,"Arbi","Chaliha","abc@gmail.com","12345");
		users.add(user1);
		User user2=new User(2,"Akash","Suklabaidya","aku@gmail.com","678910");
		users.add(user2);
		
		return users;
	}
	
	@GetMapping("/users/{userId}")//We can access the userid by using a path variable
	public User getUsersById(@PathVariable("userId")Integer id) {
		
	
		User user1=new User(1,"Arbi","Chaliha","abc@gmail.com","12345");
		user1.setId(id);
		
		return user1;
	}

	@PutMapping("/users")
	public User updateUser(@RequestBody User user) {
		User user1=new User(1,"Arbi","Chaliha","abc@gmail.com","12345");
		if(user.getFirstName()!=null)//means user wants to change first name
		{
			user1.setFirstName(user.getFirstName());
		}
		if(user.getLastName()!=null)
		{
			user1.setLastName(user.getLastName());
		}
		if(user.getEmail()!=null)
		{
			user1.setEmail(user.getEmail());
		}
		
		return user1;
	}
	
	
	@DeleteMapping("/users/{userId}")
	
		public String deleteUser(@PathVariable("userId")Integer userId)
		{
			return "User deleted successfully with id "+userId;
		}
	
	
}
