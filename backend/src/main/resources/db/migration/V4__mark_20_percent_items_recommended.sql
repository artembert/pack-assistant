-- First, set all items as non-recommended
UPDATE items SET recommended = false;

-- Then mark 20% of items as recommended using random selection
UPDATE items
SET recommended = true
WHERE id IN (
    SELECT id
    FROM (
        SELECT id,
               ROW_NUMBER() OVER (ORDER BY random()) as row_num,
               COUNT(*) OVER () as total_count
        FROM items
    ) numbered_items
    WHERE row_num <= total_count * 0.2
);