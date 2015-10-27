

# Learning Objectives
- Practice creating a database from the command line
- Practice seeding a database using SQL
- Practice using the Command Line API of postgresql
- Practice querying a database using SQL

# HMH Realty

### Step 1
- Create a new database called `hmh_realty_db`. From the command line load the schema `realty_schema.sql` into the database.

### Step 2 - Define a seed file and seed your database
In a SQL file, write commands that will add new entries into your apartment, office and storefront tables. You should create at least 6 entries for each table. Vary the attributes of each entry so no two are alike. From the command line, load this seed file into your database. Your entries should have these attributes:

- An Apartment should have:
	- an apartment number
	- number of bedrooms
	- number of bathrooms
	- an address
	- a tenant
	- an occupied status
	- a square footage
	- a price
- An Office should have:
	- an office number
	- a number of floors
	- a square footage
	- a number of cubicles
	- a number of bathrooms
	- an address
	- a company name
	- an occupied status
	- a price
- A storefront should have:
	- an address
	- an occupied status
	- a price
	- whether there is a kitchen or not
	- a square footage
	- an owner
	- whether there is outdoor seating or not

### Step 3
Create a new markdown file `hmh_realty.md` and write the SQL commands you would use to retrieve the following information from your database. Test each command in PSQL to make sure it is correct:

- The average square footage of all offices.
- The total number of apartments.
- The apartments where there is no tenant
- The names of all of the companies
- The number of cubicles and bathrooms in the 3rd office
- The storefronts that have kitchens
- The storefront with the highest square footage and outdoor seating
- The office with the lowest number of cubicles
- The office with the most cubicles and bathrooms

# The NFL

### Step 1
Create a new file called `nfl.md`. In this file write your answers to step 2.

### Step 2 - Query!

#### Queries
Some may require more than one query (i.e. you may need to get information about a team before you can complete a query for players). Test each command in PSQL to make sure it is correct:

- List the names of all NFL teams
- List the stadium name and head coach of all NFC teams
- List the head coaches of the AFC South
- The total number of players in the NFL
- The team names and head coaches of the NFC North and AFC East
- The 50 players with the highest salaries
- The average salary of all NFL players
- The names and positions of players with a salary above 10_000_000
- The player with the highest salary in the NFL
- The name and position of the first 100 players with the lowest salaries
- The average salary for a DE in the nfl
- The names of all the players on the Buffalo Bills
- The total salary of all players on the New York Giants
- The player with the lowest salary on the Green Bay Packers

_hint_: some of the commands we did not go over in class. W3 schools has an awesome guide for sql commands :wink:
