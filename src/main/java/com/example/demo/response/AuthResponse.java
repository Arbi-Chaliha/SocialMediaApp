package com.example.demo.response;

public class AuthResponse {
    private String token;
    private String response;

    public AuthResponse() {

    }
    public AuthResponse(String token,String response)
    {
        super();
        this.token=token;
        this.response=response;
    }

    public String getToken() {
        return token;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
