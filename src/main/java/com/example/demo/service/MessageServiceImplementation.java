package com.example.demo.service;

import com.example.demo.models.Chat;
import com.example.demo.models.Message;
import com.example.demo.models.User;
import com.example.demo.myrepository.ChatRepository;
import com.example.demo.myrepository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class MessageServiceImplementation implements MessageService {

    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private ChatRepository chatRepository;
    @Autowired
    private ChatService chatService;

    @Override
    public Message createMessage(User user, Integer chatId, Message req) throws Exception {
        Chat chat=chatService.findChatById(chatId);
        Message message=new Message();
        message.setChat(chat);
        message.setImage(req.getImage());
        message.setContent(req.getContent());
        message.setUser(user);
        message.setTimestamp(LocalDateTime.now());
        Message savedMessage=messageRepository.save(message);
        chat.getMessages().add(savedMessage);
        chatRepository.save(chat);
        return savedMessage;
    }

    @Override
    public List<Message> findChatsMessages(Integer chatId) throws Exception {
        Chat chat=chatService.findChatById(chatId);
        return messageRepository.findByChatId(chatId);
    }
}
