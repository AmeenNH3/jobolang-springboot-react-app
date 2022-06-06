//package com.ameen.security.config;
//
//import com.mongodb.*;
//import com.mongodb.client.MongoClient;
//import com.mongodb.client.MongoClients;
//import org.springframework.context.annotation.Bean;
//
//import java.util.ArrayList;
//import java.util.List;
//
//public class MongoConfig {
//    @Bean
//    public MongoClient mongoClient() {
//        List<ServerAddress> saList = new ArrayList<>();
//        saList.add(new ServerAddress("cluster0-shard-00-00-75shm.gcp.mongodb.net", 27017));
//        saList.add(new ServerAddress("cluster0-shard-00-01-75shm.gcp.mongodb.net", 27017));
//        saList.add(new ServerAddress("cluster0-shard-00-02-75shm.gcp.mongodb.net", 27017));
//
//        char[] pwd =  "password".toCharArray();
//        MongoCredential credential = MongoCredential.createCredential("username", "admin", pwd);
//
//        //set sslEnabled to true here
//        MongoClientOptions options = MongoClientOptions.builder()
//                .readPreference(ReadPreference.primaryPreferred())
//                .retryWrites(true)
//                .requiredReplicaSetName("Cluster0-shard-0")
//                .maxConnectionIdleTime(6000)
//                .sslEnabled(true)
//                .build();
//
//        MongoClient mongoClient = new MongoClient(saList, credential, options);
//        return mongoClient;
//    }
//}
