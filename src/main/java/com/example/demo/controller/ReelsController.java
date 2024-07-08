package com.example.demo.controller;

import com.example.demo.models.Reels;
import com.example.demo.models.User;
import com.example.demo.service.ReelsService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReelsController {
    @Autowired
    private ReelsService reelsService;
    @Autowired
    private UserService userService;
    @PostMapping("/api/reels")
    public Reels CreateReels(@RequestBody Reels reel, @RequestHeader("Authorization")String jwt)
    {
         User reqUser=userService.findUserByJwt(jwt);
         Reels createdReel=reelsService.createReel(reel,reqUser);
         return createdReel;
    }
    @GetMapping("/api/reels")
    public List<Reels> findAllReels()
    {

        List<Reels>reels=reelsService.findAllReels();
        return reels;

    }
    @GetMapping("/api/reels/user/{userId}")
    public List<Reels> findUsersReels(@PathVariable Integer userId) throws Exception {

        List<Reels>reels=reelsService.findUsersReels(userId);
        return reels;

    }
}
