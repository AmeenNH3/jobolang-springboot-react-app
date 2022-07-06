package com.ameen.security.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "jobs")
public class Job {

    @Id
    private String id;
    private String company;
    private String position;
    private String status;
    private String jobType;
    private String jobLocation;
    private String createdBy;
    @CreatedDate
    private Date createdDate;
}
