package com.example.demo.service;

import com.example.demo.models.Reels;
import com.example.demo.models.User;

import java.util.List;

public interface ReelsService {
    public Reels createReel(Reels reel, User user);
    public List<Reels> findAllReels();
    public List<Reels> findUsersReels(Integer userId) throws Exception;

}
