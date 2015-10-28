- The average square footage of all offices.

SELECT AVG(square_footage) AS average_square_footage FROM office;


- The total number of apartments.

SELECT COUNT(id) AS number_of_apartments FROM apartment;


- The apartments where there is no tenant

SELECT * FROM apartment WHERE status = 'empty';


- The names of all of the companies

SELECT company_name FROM office;


- The number of cubicles and bathrooms in the 3rd office

SELECT no_of_cubicles, no_of_bathrooms FROM office WHERE id = 3;


- The storefronts that have kitchens

SELECT * FROM storefront WHERE has_kitchen = TRUE;


- The storefront with the highest square footage and outdoor seating

SELECT * FROM storefront WHERE has_outdoor_seating = TRUE ORDER BY square_footage DESC LIMIT 1;


- The office with the lowest number of cubicles

SELECT * FROM office ORDER BY no_of_cubicles LIMIT 1;


- The office with the most cubicles and bathrooms

SELECT * FROM office ORDER BY no_of_cubicles DESC, no_of_bathrooms DESC LIMIT 1;
