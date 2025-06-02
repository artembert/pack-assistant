package com.packassistant.datafetchers.model;

import lombok.Data;

@Data
public class TripFilterInput {
    private String id;
    private Boolean showUnchecked;
}
