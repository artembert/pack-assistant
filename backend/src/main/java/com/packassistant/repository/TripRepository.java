package com.packassistant.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.packassistant.entity.Trip;

@Repository
public interface TripRepository extends JpaRepository<Trip, UUID> {
    List<Trip> findByDestination(String destination);
    
    List<Trip> findByNameContainingIgnoreCase(String name);
} 