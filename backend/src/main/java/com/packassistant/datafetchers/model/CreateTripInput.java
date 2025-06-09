package com.packassistant.datafetchers.model;

import java.time.LocalDate;

public record CreateTripInput(
    String name,
    String destination,
    LocalDate startDate,
    LocalDate endDate,
    String type
) {
}
