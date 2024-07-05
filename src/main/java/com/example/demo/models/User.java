package com.example.demo.models;

import jakarta.persistence.*;
import java.util.List;
import java.util.ArrayList;



//import javax.persistence.Id;
@Entity

public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String firstName;
	private String lastName;
	private String email;
	private String password;
	@ElementCollection
	private List<Integer> followers=new ArrayList<>();
	@ElementCollection
	private List<Integer> following=new ArrayList<>();

	@ManyToMany
	private List<Post>savedPost=new ArrayList<>();

	public User() {

	}
	public User(Integer id, String firstName, String lastName, String email, String password,List<Integer>followers,List<Integer>following,List<Post>savedPost) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.followers = followers;
		this.following = following;
		this.savedPost=savedPost;
	}

	public List<Integer> getFollowing() {return following;}

	public void setFollowing(List<Integer> following) {this.following = following;}

	public User(Integer id) {this.id = id;}

	public List<Integer> getFollowers() {return followers;}

	public void setFollowers(List<Integer> followers) {this.followers = followers;}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Post> getSavedPost() {
		return savedPost;
	}

	public void setSavedPost(List<Post> savedPost) {
		this.savedPost = savedPost;
	}
}
