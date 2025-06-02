package com.packassistant.datafetchers.model;

import lombok.Data;

@Data
public class UpdateItemInput {
    private String name;
    private Integer quantity;
    private Boolean packed;
    private Boolean recommended;
    private String notes;
} 