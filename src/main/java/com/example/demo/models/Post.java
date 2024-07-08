package com.example.demo.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;
    private String caption;
    private String image;
    private String video;

    @OneToMany//one post can be liked by multiple users
    private List<User> liked=new ArrayList<>();
    @ManyToOne//one user can create multiple posts
    //@JoinColumn(name = "user_id")
    private User user;
    private LocalDateTime createdAt;
    @OneToMany
    private List<Comment> comments=new ArrayList<>();
    public Post() {

    }
public Post(Integer Id,String caption, String image, String video, User user,List<User>liked,LocalDateTime createdAt,List<Comment> comments) {
        this.Id = Id;
        this.caption = caption;
        this.image = image;
        this.video = video;
        this.user = user;
        this.liked=liked;
        this.createdAt = createdAt;
        this.comments=comments;

}


    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<User> getLiked() {
        return liked;
    }

    public void setLiked(List<User> liked) {
        this.liked = liked;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }
}
