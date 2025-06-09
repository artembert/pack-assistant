package com.packassistant.datafetchers;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;
import com.packassistant.datafetchers.model.CreateTripInput;
import com.packassistant.datafetchers.model.TripFilterInput;
import com.packassistant.datafetchers.model.UpdateTripInput;
import com.packassistant.entity.Item;
import com.packassistant.entity.Trip;
import com.packassistant.service.TripService;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@DgsComponent
@RequiredArgsConstructor
@Slf4j
public class TripDataFetcher {
    private final TripService tripService;

    @DgsQuery
    public List<Trip> trips() {
        return tripService.findAll();
    }

    @DgsQuery
    public Trip trip(@InputArgument("input") TripFilterInput input) {
        Trip trip = tripService.findById(UUID.fromString(input.getId()));
        if (!input.getShowUnchecked()) {
            trip.getItemGroups().forEach(itemGroup ->
                itemGroup.getItems().removeIf(Item::getPacked)
            );
        }
        return trip;
    }

    @DgsMutation
    public Trip createTrip(@InputArgument("input") CreateTripInput input) {
        Trip trip = new Trip(
            null, // id will be generated
            input.name(),
            input.destination(),
            input.startDate(),
            input.endDate(),
            input.type(),
            new ArrayList<>(), // itemGroups will be empty initially
            null, // createdAt will be set by Hibernate
            null, // updatedAt will be set by Hibernate
            0, // done - initial progress
            0  // total - initial progress
        );
        return tripService.create(trip);
    }

    @DgsMutation
    public Trip updateTrip(@InputArgument String id, @InputArgument("input") UpdateTripInput input) {
        Trip trip = new Trip(
            null, // id will be preserved by service
            input.name(),
            input.destination(),
            input.startDate(),
            input.endDate(),
            input.type(),
            null, // itemGroups will be preserved by service
            null, // createdAt will be preserved by service
            null, // updatedAt will be set by Hibernate
            0, // done - will be recalculated by service
            0  // total - will be recalculated by service
        );
        return tripService.update(UUID.fromString(id), trip);
    }

    @DgsMutation
    public Boolean deleteTrip(@InputArgument String id) {
        tripService.delete(UUID.fromString(id));
        return true;
    }
}
