
package com.ameen.security.controller;


import com.ameen.security.model.Job;
import com.ameen.security.model.MonthlyApplications;
import com.ameen.security.model.Stats;
import com.ameen.security.repository.JobRepo;
import com.ameen.security.util.JwtUtil;
import com.mongodb.client.result.DeleteResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/job")
public class JobController {

    @Autowired
    private JobRepo repo;


    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    MongoOperations mongoOperations;

    @PostMapping("/createJob")
    public ResponseEntity<?> createJob(@RequestBody Job job, @RequestHeader(name = "Authorization") String token) {

        try {
            String username = jwtUtil.extractUsername(token.substring(7));
            job.setCreatedBy(username);
            repo.save(job);
            return ResponseEntity.ok("Job created successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error adding a job");
        }


    }

    @GetMapping("/allJobs")
    public List<Job> allJobs(@RequestHeader(name = "Authorization") String token) {
        String username = jwtUtil.extractUsername(token.substring(7));
        List<Job> jobs = repo.findByCreatedBy(username);
        return jobs;
    }

    @DeleteMapping("/deleteJob/{id}")
    public ResponseEntity<?> deleteJob(@PathVariable("id") String id) {
        try {
            Query query = new Query();
            query.addCriteria(Criteria.where("id").is(id));
            query.fields().include("id");
            DeleteResult deleteResult = mongoOperations.remove(query, Job.class);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error occurred");
        }

        return ResponseEntity.ok("Deleted Job successfully!");
    }

    @PostMapping("/updateJob")
    public ResponseEntity<?> updateUser(@RequestBody Job job) throws Exception {
        try {
            Query query = new Query();
            query.addCriteria(Criteria.where("id").is(job.getId()));
            query.fields().include("id");
            Update update = new Update();

            update.set("company", job.getCompany());
            update.set("position", job.getPosition());
            update.set("status", job.getStatus());
            update.set("jobLocation", job.getJobLocation());
            update.set("jobType", job.getJobType());

            mongoOperations.updateFirst(query, update, Job.class);
            return ResponseEntity.ok("Job updated Successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error occurred, failed to update !");
        }
    }

    @GetMapping("/getStats")
    public ResponseEntity<?> getStats(@RequestHeader(name = "Authorization") String token) {

        try {
            String username = jwtUtil.extractUsername(token.substring(7));
            List<Job> jobs = repo.findByCreatedBy(username);

            Long pending = jobs.stream().filter(job -> job.getStatus().equals("pending")).count();
            Long declined = jobs.stream().filter(job -> job.getStatus().equals("declined")).count();
            Long interview = jobs.stream().filter(job -> job.getStatus().equals("interview")).count();

            DateFormat sdf = new SimpleDateFormat("yyyy-MM");
            List<String> dates = jobs.stream().map(job -> sdf.format(job.getCreatedDate())).sorted().collect(Collectors.toList());
            DateFormat sdf1 = new SimpleDateFormat("yyyy-MM");
            List<Date> datesAfterSort = dates.stream().map(date -> {
                Date newDate = new Date();
                try {
                    newDate = sdf1.parse(date);
                } catch (Exception e) {
                    System.out.println(e);
                }
                return newDate;
            }).collect(Collectors.toList());
            DateFormat sdf2 = new SimpleDateFormat("MMM-yyyy");
            List<String> datesFinal = datesAfterSort.stream().map(sdf2::format).collect(Collectors.toList());


            Map<String, Long> result = datesFinal.stream().collect(Collectors.groupingBy(
                    Function.identity(), Collectors.counting()
            ));
            List<MonthlyApplications> monthlyApplications = new ArrayList<>();
            for (String key : result.keySet()
            ) {
                MonthlyApplications obj = new MonthlyApplications(key, result.get(key));
                monthlyApplications.add(obj);
            }
            Stats stats = new Stats(pending, declined, interview, monthlyApplications);

            return ResponseEntity.ok(stats);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Couldn't retrieve stats, Error occurred!");
        }

    }
}
