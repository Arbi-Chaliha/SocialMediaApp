package com.example.demo.controller;

import com.example.demo.models.Chat;
import com.example.demo.models.User;
import com.example.demo.request.CreateChatRequest;
import com.example.demo.service.ChatService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChatController {
    @Autowired
    private ChatService chatService;
    @Autowired
    private UserService userService;

    @PostMapping("/api/chats")
    public Chat createChat(@RequestHeader("Authorization")String jwt,@RequestBody CreateChatRequest req) throws Exception {
        User reqUser=userService.findUserByJwt(jwt);
        User user2=userService.findUserById(req.getUserId());
        Chat chat=chatService.createChat(reqUser,user2);
        return chat;
    }
    @GetMapping("/api/chats")
    public List<Chat>findUsersChat(@RequestHeader("Authorization")String jwt)
    {
        User reqUser=userService.findUserByJwt(jwt);
        List<Chat>chats=chatService.findUsersChat(reqUser.getId());
        return chats;
    }


}
