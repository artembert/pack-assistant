package com.packassistant.service;

import java.util.List;
import java.util.UUID;

import com.packassistant.entity.ItemGroup;

public interface ItemGroupService {
    List<ItemGroup> findAll();
    ItemGroup findById(UUID id);
    ItemGroup create(UUID tripId, ItemGroup itemGroup);
    ItemGroup update(UUID id, ItemGroup itemGroupDetails);
    void delete(UUID id);
    List<ItemGroup> findByTripId(UUID tripId);
    List<ItemGroup> findAllByTripIdOrderByName(UUID tripId);
    long countByTripId(UUID tripId);
    List<ItemGroup> searchByName(String name);
} 