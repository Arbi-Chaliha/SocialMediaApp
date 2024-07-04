package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.demo.myrepository.UserRepository;
import com.example.demo.service.UserService;
import com.example.demo.service.UserServiceImplementation;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.models.User;

import static com.example.demo.service.UserService.*;
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
        return userRepository.save(newUser);//To save a user or record in a database
	}
	@GetMapping("/users")
	public List<User> getUsers()
	{
      return userRepository.findAll();//retrieve user from database


	}
	/*@GetMapping("/users")
	public List<User> getUsers() {
		
		List<User>users=new ArrayList<>();
		User user1=new User(1,"Arbi","Chaliha","abc@gmail.com","12345");
		users.add(user1);
		User user2=new User(2,"Akash","Suklabaidya","aku@gmail.com","678910");
		users.add(user2);
		
		return users;
	}*/

	@GetMapping("/users/{userId}")//We can access the userid by using a path variable
	public User getUsersById(@PathVariable("userId")Integer id) throws Exception{
		Optional<User>user=userRepository.findById(id);
		if(user.isPresent())
		{
			return user.get();
		}
		throw new Exception("user not found with id "+id);
	}
	/*@GetMapping("/users/{userId}")//We can access the userid by using a path variable
	public User getUsersById(@PathVariable("userId")Integer id) {
		
	
		User user1=new User(1,"Arbi","Chaliha","abc@gmail.com","12345");
		user1.setId(id);
		
		return user1;
	}*/

	@PutMapping("/users/{userId}")
	public User updateUser(@RequestBody User user,@PathVariable Integer userId) throws Exception {
		/*Optional <User> user2=userRepository.findById(userId);
		if(user2.isEmpty())
		{
			throw new Exception("user not found with id "+userId);
		}
		User oldUser=user2.get();
		if(user.getFirstName()!=null)
		{
			oldUser.setFirstName(user.getFirstName());
		}
		if(user.getLastName()!=null)
		{
			oldUser.setLastName(user.getLastName());
		}
		if(user.getEmail()!=null)
		{
			oldUser.setEmail(user.getEmail());
		}
		//save the updated user in database
		return userRepository.save(oldUser);

		/*User user1=new User(1,"Arbi","Chaliha","abc@gmail.com","12345");
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
		
		return user1;*/
		/*User updatedUser;
        updatedUser = UserService.updateUser(user,userId);
        return updatedUser;*/
		Optional <User> user2=userRepository.findById(userId);
		if(user2.isEmpty())
		{
			throw new Exception("user not found with id "+userId);
		}
		User oldUser=user2.get();
		if(user.getFirstName()!=null)
		{
			oldUser.setFirstName(user.getFirstName());
		}
		if(user.getLastName()!=null)
		{
			oldUser.setLastName(user.getLastName());
		}
		if(user.getEmail()!=null)
		{
			oldUser.setEmail(user.getEmail());
		}
		//save the updated user in database
		return userRepository.save(oldUser);

	}
	
	
	@DeleteMapping("/users/{userId}")
	
		public String deleteUser(@PathVariable("userId")Integer userId) throws Exception {

			Optional<User>user=userRepository.findById(userId);
			if(user.isEmpty())
			{
				throw new Exception("user doesn't exist with id "+userId);
			}
			userRepository.delete(user.get());
			return "User deleted successfully";
		}
		@PutMapping("/users/follow/{userId1}/{userId2}")
	public User folowUser(@PathVariable Integer userId1,@PathVariable Integer userId2) throws Exception
	{
       User user=UserService.followUser(userId1,userId2);
	   return user;
	}
	@GetMapping("/users/search")
	public List<User>searchUser(@RequestParam("query")String query)
	{
		List<User>users3=UserService.searchUser(query);
		return users3;
	}
	
}
