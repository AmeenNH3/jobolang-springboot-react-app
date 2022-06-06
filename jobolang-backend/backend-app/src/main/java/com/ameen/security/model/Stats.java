package com.ameen.security.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Stats {
    private Long pending;
    private Long declined;
    private Long interview;
    private List<MonthlyApplications> monthlyApplications;

}
