package com.packassistant.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.packassistant.entity.ItemGroup;

@Repository
public interface ItemGroupRepository extends JpaRepository<ItemGroup, UUID> {
    List<ItemGroup> findByTripId(UUID tripId);
    
    List<ItemGroup> findByNameContainingIgnoreCase(String name);

    // TODO: Rewrite
    @Query("SELECT ig FROM ItemGroup ig WHERE ig.trip.id = :tripId ORDER BY ig.name")
    List<ItemGroup> findAllByTripIdOrderByName(UUID tripId);

    // TODO: Rewrite
    @Query("SELECT COUNT(ig) FROM ItemGroup ig WHERE ig.trip.id = :tripId")
    long countByTripId(UUID tripId);
} 