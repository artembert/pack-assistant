package com.packassistant.service;

import java.util.List;
import java.util.UUID;

import com.packassistant.entity.Trip;

public interface TripService {
    List<Trip> findAll();
    Trip findById(UUID id);
    Trip create(Trip trip);
    Trip update(UUID id, Trip tripDetails);
    void delete(UUID id);
    List<Trip> findByDestination(String destination);
    List<Trip> searchByName(String name);
}

