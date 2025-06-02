package com.packassistant.datafetchers.model;

import lombok.Data;
import java.time.LocalDate;

@Data
public class CreateTripInput {
    private String name;
    private String destination;
    private LocalDate startDate;
    private LocalDate endDate;
    private String type;
} 