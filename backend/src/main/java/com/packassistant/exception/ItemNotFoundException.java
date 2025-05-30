package com.packassistant.exception;

import java.util.UUID;

public class ItemNotFoundException extends ResourceNotFoundException {
    public ItemNotFoundException(UUID id) {
        super("Item", "id", id);
    }

    public ItemNotFoundException(String message) {
        super(message);
    }
} 