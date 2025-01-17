package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import com.example.demo.myrepository.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.models.User;
//Controllers ke andar sara endpoints define karte hai

@RestController
public class UserController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	UserService userService;

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
	@GetMapping("/api/users")
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

	@GetMapping("/api/users/{userId}")//We can access the userid by using a path variable
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

	@PutMapping("/api/users")
	//Some user may try to update a user by giving the userid of that user
	public User updateUser(@RequestHeader("Authorization")String jwt,@RequestBody User user) throws Exception {
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
		User ReqUser=userService.findUserByJwt(jwt);
		User updatedUser;
        updatedUser = UserService.updateUser(user,ReqUser.getId());
        return updatedUser;
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
		return userRepository.save(oldUser);*/

	}
	
	
	@DeleteMapping("/api/users/{userId}")
	
		public String deleteUser(@PathVariable("userId")Integer userId) throws Exception {

			Optional<User>user=userRepository.findById(userId);
			if(user.isEmpty())
			{
				throw new Exception("user doesn't exist with id "+userId);
			}
			userRepository.delete(user.get());
			return "User deleted successfully";
		}
		@PutMapping("/api/users/follow/{userId2}")
	public User folowUser(@RequestHeader("Authorization")String jwt, @PathVariable Integer userId2) throws Exception
	{
		User reqUser=userService.findUserByJwt(jwt);
       User user=userService.followUser(reqUser.getId(), userId2);
	   return user;
	}
	@GetMapping("/api/users/search")
	public List<User>searchUser(@RequestParam("query")String query)
	{
		List<User>users3=UserService.searchUser(query);
		return users3;
	}
	//Bearer token-->find email--->find user
	@GetMapping("/api/users/profile")
	public User getUserFromToken(@RequestHeader("Authorization")String jwt)
	{
      // System.out.println("jwt-----"+jwt);
		User user=userService.findUserByJwt(jwt);
		//we don't want to send the password in the frontend
		user.setPassword(null);
	   return user;
	}
	
}
