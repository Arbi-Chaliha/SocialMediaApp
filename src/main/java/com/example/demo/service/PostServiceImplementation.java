package com.example.demo.service;

import com.example.demo.models.Post;
import com.example.demo.models.User;
import com.example.demo.myrepository.PostRepository;
import com.example.demo.myrepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImplementation implements PostService {
    @Autowired
    PostRepository postRepository;
    @Autowired
    UserService userService;
    @Autowired
    UserRepository userRepository;

    @Override
    public Post createNewPost(Post post, Integer UserId) throws Exception {
        User user = userService.findUserById(UserId);
        Post newPost=new Post();
        newPost.setCaption(post.getCaption());
        newPost.setImage(post.getImage());
        newPost.setCreatedAt(LocalDateTime.now());
        newPost.setVideo(post.getVideo());
        newPost.setUser(user);
        return postRepository.save(newPost);

    }

    @Override
    public Post findPostById(Integer postId) throws Exception {
        Optional<Post> opt = postRepository.findById(postId);
        if(opt.isEmpty())
        {
            throw new Exception();
        }
        return opt.get();
    }

    @Override
    public Post savedPost(Integer postId, Integer UserId) throws Exception {
        Post post=findPostById(postId);
        User user=userService.findUserById(UserId);
        if(user.getSavedPost().contains(post))
        {
            user.getSavedPost().remove(post);
        }
        else
        {
            user.getSavedPost().add(post);
        }
          userRepository.save(user);
        return post;
        }

    @Override
    public Post likePost(Integer postId, Integer UserId) throws Exception {
        Post post=findPostById(postId);
        User user=userService.findUserById(UserId);
        if(post.getLiked().contains(user))
        {
            post.getLiked().remove(user);
        }
        else {
          post.getLiked().add(user);
        }
        return postRepository.save(post);
    }

    @Override
    public String deletePost(Integer postId, Integer UserId) throws Exception {
       Post post=findPostById(postId);
       User user=userService.findUserById(UserId);
       //Not to delete other's post
        if(post.getUser().getId()!=user.getId())
        {
            throw new Exception("You can't delete other's post");
        }
        postRepository.delete(post);
        return "Successfully deleted post";

    }

    @Override
    public List<Post> findAllPosts() throws Exception {
        return postRepository.findAll();
    }

    @Override
    public List<Post> findPostsByUserId(Integer UserId) throws Exception {
        return postRepository.findPostByUserId(UserId);
    }
}
