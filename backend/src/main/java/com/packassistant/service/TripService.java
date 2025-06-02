package com.packassistant.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.packassistant.entity.Trip;
import com.packassistant.exception.TripNotFoundException;
import com.packassistant.repository.TripRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TripService {
    private final TripRepository tripRepository;

    public List<Trip> findAll() {
        return tripRepository.findAll();
    }

    public Trip findById(UUID id) {
        return tripRepository.findById(id)
                .orElseThrow(() -> new TripNotFoundException(id));
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
}
