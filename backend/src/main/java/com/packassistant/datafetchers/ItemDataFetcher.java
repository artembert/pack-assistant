package com.packassistant.datafetchers;

import java.util.UUID;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.InputArgument;
import com.packassistant.datafetchers.model.CreateItemInput;
import com.packassistant.datafetchers.model.UpdateItemInput;
import com.packassistant.entity.Item;
import com.packassistant.service.ItemService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@DgsComponent
@RequiredArgsConstructor
@Slf4j
public class ItemDataFetcher {
    private final ItemService itemService;
    @DgsMutation
    public Item createItem(@InputArgument("input") CreateItemInput input) {
        Item item = new Item(
                null,
                input.getName(),
                input.getQuantity(),
                false, // New items are not packed by default
                false, // Manually created items are not recommended by default
                input.getNotes(),
                null,
                null,
                null
        );

        Item createdItem = itemService.create(UUID.fromString(input.getItemGroupId()), item);
        if (createdItem == null) {
            throw new RuntimeException("Failed to create item");
        }
        return createdItem;
    }

    @DgsMutation
    public Item updateItem(@InputArgument String id, @InputArgument("input") UpdateItemInput input) {
        Item item = new Item(
                null,
                input.getName(),
                input.getQuantity(),
                input.getPacked(),
                input.getRecommended(),
                input.getNotes(),
                null, // itemGroup will be preserved by service
                null,
                null
        );
        return itemService.update(UUID.fromString(id), item);
    }

    @DgsMutation
    public Boolean deleteItem(@InputArgument String id) {
        itemService.delete(UUID.fromString(id));
        return true;
    }
} 