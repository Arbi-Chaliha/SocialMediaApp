package com.example.demo.service;

import com.example.demo.models.Story;
import com.example.demo.models.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface StoryService {
    public  Story createStory(Story story, User user);
    public List<Story>findStoryByUserId(Integer UserId) throws Exception;


}
