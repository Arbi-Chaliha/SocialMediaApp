package com.example.demo.request;

import com.example.demo.models.Chat;
import com.example.demo.models.User;
import lombok.Data;
import org.springframework.web.bind.annotation.RequestBody;

@Data
public class CreateChatRequest {
    private Integer userId;

}
