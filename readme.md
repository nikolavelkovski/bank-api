# Bank simple api

> Usage guide

---

## Overview

This its simple service that fetches bank branches and information about them.

## Setup

The service uses postgres database so in order to start the application you need posgresql database installed.
Steps:

1. Clone the project
2. run `npm i`
3. create `.env` file and copy the content from `.env.example`
4. In terminal run `npm run db:setup` - this will run 2 scripts that will create the database and will seed the data.
   Optionally: you can do this manually steps:
   1. create a database
   2. run sql query:
      ` CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS branches (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
city VARCHAR(100) NOT NULL,
working_hours VARCHAR(100) NOT NULL,
lat DOUBLE PRECISION NOT NULL,
lon DOUBLE PRECISION NOT NULL,
has_atm BOOLEAN DEFAULT false,
created_at TIMESTAMP DEFAULT NOW()
);` 3.`TRUNCATE TABLE branches RESTART IDENTITY;
 INSERT INTO branches  (name, address, city, working_hours, lat, lon, has_atm)
 VALUES
 ('Central Branch', 'Main Street 1', 'Skopje', '09:00 - 17:00', 41.9981, 21.4254, true),
 ('Airport Branch', 'Airport Road 12', 'Skopje', '08:00 - 16:00', 41.9616, 21.6214, false),
 ('Bitola Branch', 'Shirok Sokak 45', 'Bitola', '09:00 - 17:00', 41.0297, 21.3292, true),
 ('Kumanovo Branch', 'Versajska 45', 'Bitola', '09:00 - 17:00', 47.0297, 25.3292, false);`
      -Like this you would mannualy create a database and create the table and insert the data.
5. In terminal run `npm run dev`

### Routes

`GET /api/branches` - Fetch all bank branches and metadata.
`GET /api/branches?search=&page=&limit=` - Filter/search branches
`GET /api/branches/:id` - Retrieve a single branch by ID
