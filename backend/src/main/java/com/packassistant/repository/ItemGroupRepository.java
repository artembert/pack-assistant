package com.packassistant.repository;

import com.packassistant.entity.ItemGroup;
import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemGroupRepository extends JpaRepository<ItemGroup, UUID> {
    List<ItemGroup> findByTripId(UUID tripId);
    
    List<ItemGroup> findByNameContainingIgnoreCase(String name);

    List<ItemGroup> findAllByTripIdOrderByName(UUID tripId);

    long countByTripId(UUID tripId);
} 