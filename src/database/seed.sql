TRUNCATE TABLE branches RESTART IDENTITY;

INSERT INTO branches  (name, address, city, working_hours, lat, lon, has_atm)
VALUES
('Central Branch', 'Main Street 1', 'Skopje', '09:00 - 17:00', 41.9981, 21.4254, true),
('Airport Branch', 'Airport Road 12', 'Skopje', '08:00 - 16:00', 41.9616, 21.6214, false),
('Bitola Branch', 'Shirok Sokak 45', 'Bitola', '09:00 - 17:00', 41.0297, 21.3292, true),
('Kumanovo Branch', 'Versajska 45', 'Bitola', '09:00 - 17:00', 47.0297, 25.3292, false);