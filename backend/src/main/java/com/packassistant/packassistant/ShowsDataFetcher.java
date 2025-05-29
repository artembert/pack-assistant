package com.packassistant.packassistant;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;
import java.util.List;

@DgsComponent
public class ShowsDataFetcher {
    private final List<Show> shows = List.of(
        new Show("Breaking Bad", 2016),
        new Show("Game of Thrones", 2017),
        new Show("Stranger Things", 2016),
        new Show("The Crown", 2013)
    );

    @DgsQuery
    public List<Show> shows(@InputArgument String titleFilter) {
        if (titleFilter == null || titleFilter.isEmpty()) {
            return shows;
        }
        return shows.stream()
            .filter(show -> show.title().toLowerCase().contains(titleFilter.toLowerCase()))
            .toList();
    }
}
