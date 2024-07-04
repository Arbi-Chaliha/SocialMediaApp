package com.example.demo.controller;

import com.example.demo.models.Post;
import com.example.demo.response.ApiResponse;
import com.example.demo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // This annotation tells that this class is used to define endpoints
public class PostController {
    @Autowired
    PostService postService;

    @PostMapping("/posts/user/{userId}")
    public ResponseEntity<Post> createPost(@RequestBody Post post, @PathVariable Integer userId) throws Exception {
        Post createdPost = postService.createNewPost(post, userId);
        return new ResponseEntity<>(createdPost, HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/posts/{postId}/user/{userId}")
    public ResponseEntity<ApiResponse>deletePost(@PathVariable Integer postId, @PathVariable Integer userId) throws Exception {
          String message=postService.deletePost(postId,userId);
          ApiResponse res=new ApiResponse(message,true);
        return new ResponseEntity<ApiResponse>(res, HttpStatus.OK);

    }
    @GetMapping("/posts/{postId}")
    public ResponseEntity<Post>findPostByIdHandler(@PathVariable Integer postId) throws Exception {
        Post post = postService.findPostById(postId);

        return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
    }
    @GetMapping("/posts/user/{userId}")
    public ResponseEntity<List<Post>>findUsersPost(@PathVariable Integer userId) throws Exception {
        List<Post>posts = postService.findPostsByUserId(userId);

        return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
    }
    @GetMapping("/posts")
    public ResponseEntity<List<Post>>findAllPosts() throws Exception {
        List<Post>posts = postService.findAllPosts();

        return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
    }
    @PutMapping("/posts/{postId}/user/{userId}")
    public ResponseEntity<Post>savedPostHandler(@PathVariable Integer postId,@PathVariable Integer userId) throws Exception {
        Post post = postService.savedPost(postId,userId);

        return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
    }
    @PutMapping("/posts/like/{postId}/user/{userId}")
    public ResponseEntity<Post>likedPostHandler(@PathVariable Integer postId,@PathVariable Integer userId) throws Exception {
        Post post = postService.likePost(postId,userId);

        return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
    }

}
