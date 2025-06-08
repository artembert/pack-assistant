package com.packassistant.repository;

import com.packassistant.entity.Item;
import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, UUID> {
    List<Item> findByItemGroupId(UUID itemGroupId);
    
    List<Item> findByNameContainingIgnoreCase(String name);
    
    List<Item> findAllByItemGroupTripId(UUID tripId);
    
    List<Item> findByItemGroupTripIdAndPacked(UUID tripId, Boolean packed);

    long countByItemGroupTripId(UUID tripId);

    long countByItemGroupTripIdAndPacked(UUID tripId, Boolean packed);
} 