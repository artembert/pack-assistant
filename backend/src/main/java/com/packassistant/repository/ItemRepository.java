package com.packassistant.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.packassistant.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, UUID> {
    List<Item> findByItemGroupId(UUID itemGroupId);
    
    List<Item> findByNameContainingIgnoreCase(String name);
    
    List<Item> findByPacked(Boolean packed);
    
    List<Item> findAllByItemGroupTripId(UUID tripId);
    
    // TODO: Rewrite
    @Query("SELECT i FROM Item i WHERE i.itemGroup.trip.id = :tripId AND i.packed = :packed")
    List<Item> findByTripIdAndPacked(UUID tripId, Boolean packed);

    // TODO: Rewrite
    @Query("SELECT COUNT(i) FROM Item i WHERE i.itemGroup.trip.id = :tripId")
    long countByTripId(UUID tripId);

    // TODO: Rewrite
    @Query("SELECT COUNT(i) FROM Item i WHERE i.itemGroup.trip.id = :tripId AND i.packed = true")
    long countPackedByTripId(UUID tripId);
} 