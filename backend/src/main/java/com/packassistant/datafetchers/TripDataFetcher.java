package com.packassistant.datafetchers;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.InputArgument;
import com.packassistant.entity.Trip;
import com.packassistant.datafetchers.model.CreateTripInput;
import com.packassistant.datafetchers.model.UpdateTripInput;
import com.packassistant.service.TripService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@DgsComponent
@RequiredArgsConstructor
@Slf4j
public class TripDataFetcher {
    private final TripService tripService;

    @DgsQuery
    @Transactional(readOnly = true)
    public List<Trip> trips() {
        return tripService.findAll();
    }

    @DgsQuery
    @Transactional(readOnly = true)
    public Trip trip(@InputArgument String id) {
        return tripService.findById(UUID.fromString(id));
    }

    @DgsMutation
    @Transactional
    public Trip createTrip(@InputArgument("input") CreateTripInput input) {
        Trip trip = new Trip();
        trip.setName(input.getName());
        trip.setDestination(input.getDestination());
        trip.setStartDate(input.getStartDate());
        trip.setEndDate(input.getEndDate());
        trip.setType(input.getType());
        return tripService.create(trip);
    }

    @DgsMutation
    @Transactional
    public Trip updateTrip(@InputArgument String id, @InputArgument("input") UpdateTripInput input) {
        Trip trip = new Trip();
        trip.setName(input.getName());
        trip.setDestination(input.getDestination());
        trip.setStartDate(input.getStartDate());
        trip.setEndDate(input.getEndDate());
        trip.setType(input.getType());
        return tripService.update(UUID.fromString(id), trip);
    }

    @DgsMutation
    @Transactional
    public Boolean deleteTrip(@InputArgument String id) {
        tripService.delete(UUID.fromString(id));
        return true;
    }
}
