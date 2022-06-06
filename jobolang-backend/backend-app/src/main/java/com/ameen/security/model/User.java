package com.ameen.security.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {
    @Indexed(unique = true)
    private String username;
    @Indexed(unique = true)
    private String email;

    private String password;
    private String fullName ="full name";
    private String location = "my location";
}
