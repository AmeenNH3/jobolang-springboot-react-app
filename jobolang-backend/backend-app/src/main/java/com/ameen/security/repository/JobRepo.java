package com.ameen.security.repository;


import com.ameen.security.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface JobRepo extends MongoRepository<Job,String> {
    List<Job> findByCreatedBy(String username);

//    @Aggregation(pipeline = {
//            "{ $match: { createdBy: \"test\" } },\n" +
//            "{\n" +
//            "        $group: {\n" +
//            "_id: { year: { $year: \"$createdDate\" }, month: { $month: \"$createdDate\" } },\n"+
//            "count: { $sum: 1 },\n" +
//            "},\n" +
//            "},\n" +
//            "{ $sort: { \"_id.year\": -1, \"_id.month\": -1 } },\n" +
//            "{ $limit: 6 },\n" +
//            "]);\n"
//    })
//    AggregationResults<MonthlyApplicants> aggregateStats();


}
