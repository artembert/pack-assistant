package com.packassistant.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.packassistant.entity.Item;
import com.packassistant.entity.ItemGroup;
import com.packassistant.repository.ItemGroupRepository;
import com.packassistant.repository.ItemRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ItemService {
    private final ItemRepository itemRepository;
    private final ItemGroupRepository itemGroupRepository;

    public List<Item> findAll() {
        return itemRepository.findAll();
    }

    public Item findById(UUID id) {
        return itemRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Item not found with id: " + id));
    }

    @Transactional
    public Item create(UUID itemGroupId, Item item) {
        ItemGroup itemGroup = itemGroupRepository.findById(itemGroupId)
                .orElseThrow(() -> new RuntimeException("ItemGroup not found with id: " + itemGroupId));
        item.setItemGroup(itemGroup);
        return itemRepository.save(item);
    }

    @Transactional
    public Item update(UUID id, Item itemDetails) {
        Item item = findById(id);
        item.setName(itemDetails.getName());
        item.setQuantity(itemDetails.getQuantity());
        item.setPacked(itemDetails.getPacked());
        item.setRecommended(itemDetails.getRecommended());
        item.setNotes(itemDetails.getNotes());
        return itemRepository.save(item);
    }

    @Transactional
    public void delete(UUID id) {
        itemRepository.deleteById(id);
    }

    @Transactional
    public Item togglePacked(UUID id) {
        Item item = findById(id);
        item.setPacked(!item.getPacked());
        return itemRepository.save(item);
    }

    public List<Item> findByItemGroupId(UUID itemGroupId) {
        return itemRepository.findByItemGroupId(itemGroupId);
    }

    public List<Item> findAllByTripId(UUID tripId) {
        return itemRepository.findAllByTripId(tripId);
    }

    public List<Item> findByTripIdAndPacked(UUID tripId, Boolean packed) {
        return itemRepository.findByTripIdAndPacked(tripId, packed);
    }

    public long countByTripId(UUID tripId) {
        return itemRepository.countByTripId(tripId);
    }

    public long countPackedByTripId(UUID tripId) {
        return itemRepository.countPackedByTripId(tripId);
    }

    public List<Item> searchByName(String name) {
        return itemRepository.findByNameContainingIgnoreCase(name);
    }
} 