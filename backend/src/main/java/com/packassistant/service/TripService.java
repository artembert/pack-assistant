package com.packassistant.service;

import com.packassistant.entity.Item;
import com.packassistant.entity.ItemGroup;
import com.packassistant.entity.Trip;
import com.packassistant.exception.TripNotFoundException;
import com.packassistant.repository.TripRepository;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class TripService {
    private final TripRepository tripRepository;

    public List<Trip> findAll() {
        return tripRepository.findAll().stream().map(this::calculateTripProgress).collect(Collectors.toList());
    }

    public Trip findById(UUID id) {
        var item = tripRepository.findById(id)
            .orElseThrow(() -> new TripNotFoundException(id));
        var itemGroups = item.getItemGroups().stream().map(this::calculateItemGroupProgress).toList();
        item.setItemGroups(itemGroups);
        return calculateTripProgress(item);
    }

    @Transactional
    public Trip create(Trip trip) {
        return tripRepository.save(trip);
    }

    @Transactional
    public Trip update(UUID id, Trip tripDetails) {
        Trip trip = findById(id);
        trip.setName(tripDetails.getName());
        trip.setStartDate(tripDetails.getStartDate());
        trip.setEndDate(tripDetails.getEndDate());
        trip.setType(tripDetails.getType());
        return tripRepository.save(trip);
    }

    @Transactional
    public void delete(UUID id) {
        if (!tripRepository.existsById(id)) {
            throw new TripNotFoundException(id);
        }
        tripRepository.deleteById(id);
    }

    public List<Trip> findByDestination(String destination) {
        return tripRepository.findByDestination(destination);
    }

    public List<Trip> searchByName(String name) {
        return tripRepository.findByNameContainingIgnoreCase(name);
    }

    private Trip calculateTripProgress(Trip trip) {
        if (trip.getItemGroups() == null) {
            trip.setProgress(0, 0);
            return trip;
        }
        var goods = trip.getItemGroups().stream().map(ItemGroup::getItems).flatMap(List::stream).toList();
        trip.setProgress(goods.stream().filter(Item::getPacked).toList().size(), goods.size());

        return trip;
    }

    private ItemGroup calculateItemGroupProgress(ItemGroup itemGroup) {
        if (itemGroup.getItems() == null) {
            itemGroup.setProgress(0, 0);
            return itemGroup;
        }
        var goods = itemGroup.getItems().stream().filter(Item::getPacked).toList();
        itemGroup.setProgress(goods.size(), itemGroup.getItems().size());

        return itemGroup;
    }
}
