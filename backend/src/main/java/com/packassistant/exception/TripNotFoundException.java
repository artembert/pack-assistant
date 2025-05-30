package com.packassistant.exception;

import java.util.UUID;

public class TripNotFoundException extends ResourceNotFoundException {
    public TripNotFoundException(UUID id) {
        super("Trip", "id", id);
    }

    public TripNotFoundException(String message) {
        super(message);
    }
} 