
DROP TABLE IF EXISTS apartment;
DROP TABLE IF EXISTS office;
DROP TABLE IF EXISTS storefront;


-- - An Apartment should have:
-- 	- an apartment number
-- 	- number of bedrooms
-- 	- number of bathrooms
-- 	- an address
-- 	- a tenant
-- 	- an occupied status
-- 	- a square footage
-- 	- a price
CREATE TABLE apartment (
  id SERIAL PRIMARY KEY,
  apt_no VARCHAR(30) NOT NULL,
  no_of_bedrooms INTEGER,
  no_of_bathrooms INTEGER,
  address VARCHAR(255),
  tenant VARCHAR(30),
  status VARCHAR(30),
  square_footage INTEGER,
  price NUMERIC(15, 6)
);


-- - An Office should have:
-- 	- an office number
-- 	- a number of floors
-- 	- a square footage
-- 	- a number of cubicles
-- 	- a number of bathrooms
-- 	- an address
-- 	- a company name
-- 	- an occupied status
-- 	- a price
CREATE TABLE office (
  id SERIAL PRIMARY KEY,
  office_no VARCHAR(30) NOT NULL,
  no_of_floors INTEGER,
  no_of_cubicles INTEGER,
  no_of_bathrooms INTEGER,
  square_footage INTEGER,
  address VARCHAR(255),
  company_name VARCHAR(30),
  status VARCHAR(30),
  price NUMERIC(15, 6)
);


-- - A storefront should have:
-- 	- an address
-- 	- an occupied status
-- 	- a price
-- 	- whether there is a kitchen or not
-- 	- a square footage
-- 	- an owner
-- 	- whether there is outdoor seating or not
CREATE TABLE storefront (
  id SERIAL PRIMARY KEY,
  address VARCHAR(255),
  status VARCHAR(30),
  price NUMERIC(15, 6),
  square_footage INTEGER,
  owner VARCHAR(30),
  has_kitchen BOOLEAN,
  has_outdoor_seating BOOLEAN
);
