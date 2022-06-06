package com.ameen.security.model;

import java.io.Serializable;


public class AuthenticationResponse implements Serializable {

    private String token;
    private String username;
    private String email;
    private String fullName = "fullName";
    private String location = "my city";

    public AuthenticationResponse(String token, String username, String email, String fullName, String location) {
        this.token = token;
        this.username = username;
        this.email = email;
        this.fullName = fullName;
        this.location = location;
    }

    public  AuthenticationResponse(String token){
        this.token = token;
    }

    public String getToken() {
        return token;
    }



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "AuthenticationResponse{" +
                "jwt='" + token + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", fullName='" + fullName + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
