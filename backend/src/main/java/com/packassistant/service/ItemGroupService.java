package com.packassistant.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.packassistant.entity.ItemGroup;
import com.packassistant.entity.Trip;
import com.packassistant.repository.ItemGroupRepository;
import com.packassistant.repository.TripRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ItemGroupService {
    private final ItemGroupRepository itemGroupRepository;
    private final TripRepository tripRepository;

    public List<ItemGroup> findAll() {
        return itemGroupRepository.findAll();
    }

    public ItemGroup findById(UUID id) {
        return itemGroupRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("ItemGroup not found with id: " + id));
    }

    @Transactional
    public ItemGroup create(UUID tripId, ItemGroup itemGroup) {
        Trip trip = tripRepository.findById(tripId)
                .orElseThrow(() -> new RuntimeException("Trip not found with id: " + tripId));
        itemGroup.setTrip(trip);
        return itemGroupRepository.save(itemGroup);
    }

    @Transactional
    public ItemGroup update(UUID id, ItemGroup itemGroupDetails) {
        ItemGroup itemGroup = findById(id);
        itemGroup.setName(itemGroupDetails.getName());
        return itemGroupRepository.save(itemGroup);
    }

    @Transactional
    public void delete(UUID id) {
        itemGroupRepository.deleteById(id);
    }

    public List<ItemGroup> findByTripId(UUID tripId) {
        return itemGroupRepository.findByTripId(tripId);
    }

    public List<ItemGroup> findAllByTripIdOrderByName(UUID tripId) {
        return itemGroupRepository.findAllByTripIdOrderByName(tripId);
    }

    public long countByTripId(UUID tripId) {
        return itemGroupRepository.countByTripId(tripId);
    }

    public List<ItemGroup> searchByName(String name) {
        return itemGroupRepository.findByNameContainingIgnoreCase(name);
    }
} 