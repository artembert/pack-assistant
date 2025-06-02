package com.packassistant.service;

import java.util.List;
import java.util.UUID;

import com.packassistant.entity.Item;

public interface ItemService {
    List<Item> findAll();
    Item findById(UUID id);
    Item create(UUID itemGroupId, Item item);
    Item update(UUID id, Item itemDetails);
    void delete(UUID id);
    Item togglePacked(UUID id);
    List<Item> findByItemGroupId(UUID itemGroupId);
    List<Item> findAllByTripId(UUID tripId);
    List<Item> findByTripIdAndPacked(UUID tripId, Boolean packed);
    long countByTripId(UUID tripId);
    long countPackedByTripId(UUID tripId);
    List<Item> searchByName(String name);
} 