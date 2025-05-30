package com.packassistant.exception;

import java.util.UUID;

public class ItemGroupNotFoundException extends ResourceNotFoundException {
    public ItemGroupNotFoundException(UUID id) {
        super("ItemGroup", "id", id);
    }

    public ItemGroupNotFoundException(String message) {
        super(message);
    }
} 