package com.example.demo.myrepository;

import com.example.demo.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Integer> {
    //With the help of post repository we can add,manipulate and access data from the database
    @Query("select p from Post p where p.user.id=:userId")
    List<Post> findPostByUserId(Integer userId );
}
