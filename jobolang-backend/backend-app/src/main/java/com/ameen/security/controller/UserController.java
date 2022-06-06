package com.ameen.security.controller;

import com.ameen.security.model.AuthenticationRequest;
import com.ameen.security.model.AuthenticationResponse;
import com.ameen.security.model.RegisterUser;
import com.ameen.security.model.User;
import com.ameen.security.repository.UserRepo;
import com.ameen.security.service.MyUserDetailsService;
import com.ameen.security.service.UserDetailsImpl;
import com.ameen.security.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/user")
public class UserController {


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    PasswordEncoder encoder;
    @Autowired
    private UserRepo userRepo;

    @Autowired
    MongoOperations mongoOperations;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
        try{


            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword(), new ArrayList<>()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final UserDetailsImpl userDetails = (UserDetailsImpl) userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
            final String jwt = jwtUtil.generateToken(userDetails);

            AuthenticationResponse authenticationResponse = new AuthenticationResponse(jwt,userDetails.getUsername(),userDetails.getEmail(),userDetails.getFullName(), userDetails.getLocation());
            return ResponseEntity.ok(authenticationResponse);
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Error, failed to login !");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterUser registerUser){
        try{
            if(registerUser.getUsername().length() < 4 || registerUser.getPassword().length() < 6){
                return  ResponseEntity.badRequest().body("Username should be greater than 4 characters and password should be more than 6 characters long");
            }
            if(userRepo.existsByUsername(registerUser.getUsername()) || userRepo.existsByEmail(registerUser.getEmail())){
                return  ResponseEntity.badRequest().body("Username or email already exists");
            }
            User user  = new User();
            user.setUsername(registerUser.getUsername());
            user.setPassword(encoder.encode(registerUser.getPassword()));
            user.setEmail(registerUser.getEmail());
            userRepo.save(user);
            return ResponseEntity.ok("Registered Successfully");
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Error occurred, failed to register !");
        }
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user,@RequestHeader(name = "Authorization") String token) throws Exception{

        try{
            Query query = new Query();
            query.addCriteria(Criteria.where("username").is(user.getUsername()));
            query.fields().include("username");
            Update update = new Update();

            update.set("username",user.getUsername());
            update.set("email",user.getEmail());
            update.set("fullName",user.getFullName());
            update.set("location",user.getLocation());
            mongoOperations.updateFirst(query,update,User.class);

            User updatedUser = userRepo.findByUsername(user.getUsername());



            return ResponseEntity.ok(new User(updatedUser.getUsername(),updatedUser.getEmail(),null,updatedUser.getFullName(),updatedUser.getLocation()));
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Error occurred, failed to update !");
        }
    }

}
