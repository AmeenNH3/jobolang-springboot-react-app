package com.ameen.security.repository;


import com.ameen.security.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User,String> {
    User findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);


}