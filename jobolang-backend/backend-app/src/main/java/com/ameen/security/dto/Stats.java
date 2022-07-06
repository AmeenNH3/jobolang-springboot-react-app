package com.ameen.security.dto;

import com.ameen.security.dto.MonthlyApplications;
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
