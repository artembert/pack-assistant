package com.packassistant.datafetchers;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.DgsData;
import com.netflix.graphql.dgs.InputArgument;
import com.packassistant.entity.Item;
import com.packassistant.datafetchers.model.UpdateItemInput;
import com.packassistant.datafetchers.model.CreateItemInput;
import com.packassistant.service.ItemGroupService;
import com.packassistant.service.ItemService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@DgsComponent
@RequiredArgsConstructor
@Slf4j
public class ItemDataFetcher {
    private final ItemService itemService;
    @DgsMutation
    @Transactional
    public Item createItem(@InputArgument("input") CreateItemInput input) {
        Item item = new Item();
        item.setName(input.getName());
        item.setQuantity(input.getQuantity());
        item.setPacked(false); // New items are not packed by default
        item.setRecommended(false); // Manually created items are not recommended by default
        item.setNotes(input.getNotes());
        
        Item createdItem = itemService.create(UUID.fromString(input.getItemGroupId()), item);
        if (createdItem == null) {
            throw new RuntimeException("Failed to create item");
        }
        return createdItem;
    }

    @DgsMutation
    @Transactional
    public Item updateItem(@InputArgument String id, @InputArgument("input") UpdateItemInput input) {
        Item item = new Item();
        item.setName(input.getName());
        item.setQuantity(input.getQuantity());
        item.setPacked(input.getPacked());
        item.setRecommended(input.getRecommended());
        item.setNotes(input.getNotes());
        return itemService.update(UUID.fromString(id), item);
    }
} 