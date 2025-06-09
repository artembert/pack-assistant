package com.packassistant.datafetchers.model;

import java.time.LocalDate;

public record UpdateTripInput(
    String name,
    String destination,
    LocalDate startDate,
    LocalDate endDate,
    String type
) {
}
