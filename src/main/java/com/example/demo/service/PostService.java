package com.example.demo.service;

import com.example.demo.models.Post;

import java.util.List;

public interface PostService {
    Post createNewPost(Post post,Integer UserId)throws Exception;
    Post findPostById(Integer postId)throws Exception;
    Post savedPost(Integer postId,Integer UserId)throws Exception;
    Post likePost(Integer postId,Integer UserId)throws Exception;
    String deletePost(Integer postId,Integer UserId)throws Exception;
    List<Post> findAllPosts()throws Exception;
    List <Post> findPostsByUserId(Integer UserId)throws Exception;


}
