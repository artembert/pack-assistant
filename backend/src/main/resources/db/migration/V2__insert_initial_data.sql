-- Insert sample trips
INSERT INTO trips (id, name, destination, start_date, end_date, type, created_at, updated_at)
VALUES 
    ('11111111-1111-1111-1111-111111111111', 'Paris City Break', 'Paris, France', '2024-07-01', '2024-07-05', 'CITY', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('22222222-2222-2222-2222-222222222222', 'Barcelona Beach Holiday', 'Barcelona, Spain', '2024-08-15', '2024-08-22', 'BEACH', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('33333333-3333-3333-3333-333333333333', 'Swiss Alps Ski Trip', 'Zermatt, Switzerland', '2024-12-20', '2024-12-27', 'SKI', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert item groups for Paris trip
INSERT INTO item_groups (id, name, trip_id, created_at, updated_at)
VALUES 
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'City Clothing', '11111111-1111-1111-1111-111111111111', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Electronics', '11111111-1111-1111-1111-111111111111', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'Travel Essentials', '11111111-1111-1111-1111-111111111111', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert items for Paris trip
INSERT INTO items (id, name, quantity, packed, recommended, notes, item_group_id, created_at, updated_at)
VALUES 
    -- City Clothing items
    ('11111111-aaaa-1111-aaaa-111111111111', 'Comfortable Walking Shoes', 1, false, true, 'For exploring museums and streets', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('22222222-aaaa-2222-aaaa-222222222222', 'Light Jacket', 1, false, true, 'For evening walks', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('33333333-aaaa-3333-aaaa-333333333333', 'Smart Casual Outfits', 3, false, true, 'For restaurants and attractions', 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    
    -- Electronics items
    ('11111111-bbbb-1111-bbbb-111111111111', 'Camera', 1, false, true, 'For Eiffel Tower photos', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('22222222-bbbb-2222-bbbb-222222222222', 'Power Adapter', 1, false, true, 'EU plug type', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    
    -- Travel Essentials items
    ('11111111-cccc-1111-cccc-111111111111', 'Paris Museum Pass', 1, false, true, 'Pre-booked', 'cccccccc-cccc-cccc-cccc-cccccccccccc', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('22222222-cccc-2222-cccc-222222222222', 'Metro Card', 1, false, true, 'For city transport', 'cccccccc-cccc-cccc-cccc-cccccccccccc', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert item groups for Barcelona trip
INSERT INTO item_groups (id, name, trip_id, created_at, updated_at)
VALUES 
    ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'Beach Wear', '22222222-2222-2222-2222-222222222222', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'City Exploration', '22222222-2222-2222-2222-222222222222', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('ffffffff-ffff-ffff-ffff-ffffffffffff', 'Evening Wear', '22222222-2222-2222-2222-222222222222', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert items for Barcelona trip
INSERT INTO items (id, name, quantity, packed, recommended, notes, item_group_id, created_at, updated_at)
VALUES 
    -- Beach Wear items
    ('11111111-dddd-1111-dddd-111111111111', 'Swimsuits', 2, false, true, 'For beach days', 'dddddddd-dddd-dddd-dddd-dddddddddddd', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('22222222-dddd-2222-dddd-222222222222', 'Beach Towel', 1, false, true, NULL, 'dddddddd-dddd-dddd-dddd-dddddddddddd', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('33333333-dddd-3333-dddd-333333333333', 'Sunglasses', 1, false, true, 'UV protection', 'dddddddd-dddd-dddd-dddd-dddddddddddd', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    
    -- City Exploration items
    ('11111111-eeee-1111-eeee-111111111111', 'Comfortable Sandals', 1, false, true, 'For walking tours', 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('22222222-eeee-2222-eeee-222222222222', 'Sagrada Familia Tickets', 1, false, true, 'Pre-booked', 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    
    -- Evening Wear items
    ('11111111-ffff-1111-ffff-111111111111', 'Smart Outfit', 1, false, true, 'For tapas restaurants', 'ffffffff-ffff-ffff-ffff-ffffffffffff', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('22222222-ffff-2222-ffff-222222222222', 'Light Cardigan', 1, false, true, 'For cooler evenings', 'ffffffff-ffff-ffff-ffff-ffffffffffff', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert item groups for Swiss Alps trip
INSERT INTO item_groups (id, name, trip_id, created_at, updated_at)
VALUES 
    ('44444444-4444-4444-4444-444444444444', 'Ski Equipment', '33333333-3333-3333-3333-333333333333', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('55555555-5555-5555-5555-555555555555', 'Winter Clothing', '33333333-3333-3333-3333-333333333333', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('66666666-6666-6666-6666-666666666666', 'Apres-Ski', '33333333-3333-3333-3333-333333333333', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert items for Swiss Alps trip
INSERT INTO items (id, name, quantity, packed, recommended, notes, item_group_id, created_at, updated_at)
VALUES 
    -- Ski Equipment items
    ('11111111-4444-1111-4444-111111111111', 'Ski Boots', 1, false, true, 'Size 42', '44444444-4444-4444-4444-444444444444', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('22222222-4444-2222-4444-222222222222', 'Ski Poles', 1, false, true, NULL, '44444444-4444-4444-4444-444444444444', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('33333333-4444-3333-4444-333333333333', 'Ski Goggles', 1, false, true, 'UV protection', '44444444-4444-4444-4444-444444444444', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    
    -- Winter Clothing items
    ('11111111-5555-1111-5555-111111111111', 'Ski Jacket', 1, false, true, 'Waterproof', '55555555-5555-5555-5555-555555555555', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('22222222-5555-2222-5555-222222222222', 'Thermal Base Layers', 2, false, true, NULL, '55555555-5555-5555-5555-555555555555', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('33333333-5555-3333-5555-333333333333', 'Ski Gloves', 1, false, true, 'Insulated', '55555555-5555-5555-5555-555555555555', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    
    -- Apres-Ski items
    ('11111111-6666-1111-6666-111111111111', 'Swimsuit', 1, false, true, 'For hotel spa', '66666666-6666-6666-6666-666666666666', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('22222222-6666-2222-6666-222222222222', 'Smart Casual Outfit', 1, false, true, 'For mountain restaurants', '66666666-6666-6666-6666-666666666666', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
