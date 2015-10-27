DROP TABLE IF EXISTS instructors;

CREATE TABLE instructors (
  id SERIAL PRIMARY KEY,  -- increments uniq identifier
  name TEXT NOT NULL,
  hometown TEXT NOT NULL
);

-- INSERT INTO TABLE_NAME VALUES (val1, val2, val3)

INSERT INTO instructors VALUES (1, 'Syed', 'Houston');
INSERT INTO instructors VALUES (2, 'Colin', 'Idaho Falls');
INSERT INTO instructors VALUES (3, 'Ben', 'Houston');

-- SELECT * FROM instructors;

CREATE TABLE students (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  age INT NOT NULL,
  address CHAR(50)
);


INSERT INTO students VALUES (1, 'Jack Sparrow', 28, '50 Main St, New York, NY');
INSERT INTO students VALUES (2, 'Jilly Cakes', 30, '123 Webdev Dr. Boston, MA');
INSERT INTO students VALUES (3, 'Johnny Bananas', 25, '555 Five St, Fivetowns, NY');
INSERT INTO students VALUES (4, 'Jackie Lackie', 101, '2 OldForThis Ct, Fivetowns, NY');
INSERT INTO students VALUES (5, 'Slaggy McRaggy', 28, '3319 9th Street Astoria, NY');
