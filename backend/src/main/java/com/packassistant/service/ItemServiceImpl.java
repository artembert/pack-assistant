package com.packassistant.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.packassistant.entity.Item;
import com.packassistant.entity.ItemGroup;
import com.packassistant.exception.ItemGroupNotFoundException;
import com.packassistant.exception.ItemNotFoundException;
import com.packassistant.repository.ItemGroupRepository;
import com.packassistant.repository.ItemRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;
    private final ItemGroupRepository itemGroupRepository;

    @Override
    public List<Item> findAll() {
        return itemRepository.findAll();
    }

    @Override
    public Item findById(UUID id) {
        return itemRepository.findById(id)
                .orElseThrow(() -> new ItemNotFoundException(id));
    }

    @Override
    @Transactional
    public Item create(UUID itemGroupId, Item item) {
        ItemGroup itemGroup = itemGroupRepository.findById(itemGroupId)
                .orElseThrow(() -> new ItemGroupNotFoundException(itemGroupId));
        item.setItemGroup(itemGroup);
        return itemRepository.save(item);
    }

    @Override
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

    @Override
    @Transactional
    public void delete(UUID id) {
        if (!itemRepository.existsById(id)) {
            throw new ItemNotFoundException(id);
        }
        itemRepository.deleteById(id);
    }

    @Override
    @Transactional
    public Item togglePacked(UUID id) {
        Item item = findById(id);
        item.setPacked(!item.getPacked());
        return itemRepository.save(item);
    }

    @Override
    public List<Item> findByItemGroupId(UUID itemGroupId) {
        if (!itemGroupRepository.existsById(itemGroupId)) {
            throw new ItemGroupNotFoundException(itemGroupId);
        }
        return itemRepository.findByItemGroupId(itemGroupId);
    }

    @Override
    public List<Item> findAllByTripId(UUID tripId) {
        return itemRepository.findAllByItemGroupTripId(tripId);
    }

    @Override
    public List<Item> findByTripIdAndPacked(UUID tripId, Boolean packed) {
        return itemRepository.findByItemGroupTripIdAndPacked(tripId, packed);
    }

    @Override
    public long countByTripId(UUID tripId) {
        return itemRepository.countByItemGroupTripId(tripId);
    }

    @Override
    public long countPackedByTripId(UUID tripId) {
        return itemRepository.countByItemGroupTripIdAndPacked(tripId, true);
    }

    @Override
    public List<Item> searchByName(String name) {
        return itemRepository.findByNameContainingIgnoreCase(name);
    }
} 