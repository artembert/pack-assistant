package com.packassistant.datafetchers.model;

import lombok.Data;

@Data
public class CreateItemInput {
    private String name;
    private String itemGroupId;
    private Integer quantity;
    private Boolean recommended;
    private String notes;
} 