package com.example.demo.controller;

import com.example.demo.models.Post;
import com.example.demo.models.User;
import com.example.demo.response.ApiResponse;
import com.example.demo.service.PostService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // This annotation tells that this class is used to define endpoints
public class PostController {
    @Autowired
    PostService postService;
    @Autowired
    UserService userService;

    //@PostMapping("/posts/user/{userId}")-->user id front end se nhi dena hai because some user may create posts using the id of another user
    @PostMapping("/api/posts")
    public ResponseEntity<Post> createPost(@RequestHeader("Authorization")String jwt,@RequestBody Post post) throws Exception {

        User reqUser=userService.findUserByJwt(jwt);
        Post createdPost = postService.createNewPost(post, reqUser.getId());
        return new ResponseEntity<>(createdPost, HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<ApiResponse>deletePost(@RequestHeader("Authorization")String jwt,@PathVariable Integer postId) throws Exception {
          User reqUser=userService.findUserByJwt(jwt);
          String message=postService.deletePost(postId,reqUser.getId());
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
    @PutMapping("/posts/save/{postId}")
    public ResponseEntity<Post>savedPostHandler(@PathVariable Integer postId,@RequestHeader("Authorization")String jwt) throws Exception {
        User reqUser=userService.findUserByJwt(jwt);
        Post post = postService.savedPost(postId, reqUser.getId());

        return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
    }
    @PutMapping("/posts/like/{postId}")
    public ResponseEntity<Post>likedPostHandler(@PathVariable Integer postId,@RequestHeader("Authorization")String jwt) throws Exception {
        User reqUser=userService.findUserByJwt(jwt);
        Post post = postService.likePost(postId,reqUser.getId());

        return new ResponseEntity<Post>(post, HttpStatus.ACCEPTED);
    }

}
