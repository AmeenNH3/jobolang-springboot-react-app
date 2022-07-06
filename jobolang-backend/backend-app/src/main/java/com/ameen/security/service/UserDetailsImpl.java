package com.ameen.security.service;

import com.ameen.security.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;


public class UserDetailsImpl implements UserDetails {

    private String username;
    private String password;
    private String email;
    private String fullName ="full name";
    private String location = "my location";
    private Collection<? extends GrantedAuthority> authorities;


    public UserDetailsImpl(String username, String password, String email, String fullName, String location,Collection<? extends GrantedAuthority> authorities) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.fullName = fullName;
        this.location = location;
        this.authorities = authorities;
    }

    public static UserDetailsImpl build(User user) {
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority("ROLE"));
        return new UserDetailsImpl(
                user.getUsername(),
                user.getPassword(),
                user.getEmail(),
                user.getFullName(),
                user.getLocation(),
                authorities
                );
    }
    @Override
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
