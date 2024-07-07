package com.example.demo.service;

import com.example.demo.models.User;

import java.util.List;

public interface UserService {
     public User RegisterUser(User user);
     public User findUserById(Integer userid) throws Exception;
     public User findUserByEmail(String email);


    public User followUser(Integer userId1, Integer userId2) throws Exception;




    static User updateUser(User user, Integer userId) throws Exception {
        return null;
    }

    public static List<User> searchUser(String query) {
        return null;
    }
  public User findUserByJwt(String jwt);


}
