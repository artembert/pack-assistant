-- Mark half of the items as packed using a window function
UPDATE items
SET packed = true
WHERE id IN (
    SELECT id
    FROM (
        SELECT id,
               ROW_NUMBER() OVER (PARTITION BY item_group_id ORDER BY id) as row_num,
               COUNT(*) OVER (PARTITION BY item_group_id) as total_count
        FROM items
    ) numbered_items
    WHERE row_num <= total_count / 2
); 