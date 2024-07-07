package com.example.demo.service;

import com.example.demo.config.JwtProvider;
import com.example.demo.models.User;
import com.example.demo.myrepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    @Lazy
    UserService userService;

    @Override
    public User RegisterUser(User user) {
        User savedUser;
        savedUser=userService.RegisterUser(user);
        return savedUser;
        /*User newUser=new User();
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPassword(user.getPassword());
        newUser.setId(user.getId());
        return userRepository.save(newUser);*/
    }

    @Override
    public User findUserById(Integer userid) throws Exception {
        Optional<User> user=userRepository.findById(userid);
        if(user.isPresent())
        {
            return user.get();
        }
        throw new Exception("user not found with id "+userid);
    }

    @Override
    public User findUserByEmail(String email) {
      User user;
      user = userRepository.findByEmail(email);
      return user;
    }

    //@Override
    public User followUser(Integer reqUserId, Integer userid2) throws Exception {
        User reqUser=findUserById(reqUserId);//reqUser is the logged in user who wants to follow
        User user2=findUserById(userid2);
        user2.getFollowers().add(reqUser.getId());
        reqUser.getFollowing().add(user2.getId());
        userRepository.save(reqUser);
        userRepository.save(user2);
        return reqUser;
    }

    //@Override
    public User updateUser(User user,Integer userId)throws Exception {
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

   // @Override
    public List<User> searchUser(String query) {
        return UserRepository.searchUser(query);
    }

    @Override
    public User findUserByJwt(String jwt) {
        String email= JwtProvider.getEmailFromJwtToken(jwt);
        User user=userRepository.findByEmail(email);
        return user;
    }
}
