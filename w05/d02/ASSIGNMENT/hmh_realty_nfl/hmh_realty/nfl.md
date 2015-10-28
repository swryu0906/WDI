- List the names of all NFL teams

```
SELECT name AS nfl_team_name FROM teams;
```

- List the stadium name and head coach of all NFC teams

```
SELECT stadium, head_coach FROM teams;
```

- List the head coaches of the AFC South

```
SELECT head_coach FROM teams WHERE division = 'South' AND conference = 'AFC';

   head_coach
----------------
 Bill OBrien
 Chuck Pagano
 Gus Bradley
 Ken Whisenhunt
(4 row)

```

- The total number of players in the NFL

```
SELECT COUNT(id) AS number_of__players FROM players;

 number_of__players
--------------------
               1532
(1 row)
```

- The team names and head coaches of the NFC North and AFC East

```
SELECT name AS team_name, head_coach FROM teams WHERE (division = 'North' AND conference = 'NFC') OR (division = 'East' AND conference = 'AFC');

      team_name       |   head_coach
----------------------+----------------
 Buffalo Bills        | Doug Marrone
 Miami Dolphins       | Joe Philbin
 New England Patriots | Bill Belichick
 New York Jets        | Rex Ryan
 Chicago Bears        | Marc Trestman
 Detroit Lions        | Jim Caldwell
 Green Bay Packers    | Mike McCarthy
 Minnesota Vikings    | Mike Zimmer
 (8 rows)
```

- The 50 players with the highest salaries

```
SELECT * FROM players ORDER BY salary DESC LIMIT 50;
```

- The average salary of all NFL players

```
SELECT AVG(salary) AS average_salary FROM players;

    average_salary
----------------------
 1579692.539817232376
(1 row)
```

- The names and positions of players with a salary above 10_000_000

```
SELECT name AS nfl_player_name , position FROM players WHERE salary > 10000000;

     nfl_player_name     | position
-------------------------+----------
 Jake Long               | T
 Joe Thomas              | T
 Dwight Freeney          | DE
 Peyton Manning (buyout) | QB
 Peyton Manning          | QB
 Elvis Dumervil          | DE
 Tamba Hali              | DE
 Philip Rivers           | QB
 Michael Vick            | QB
 Nnamdi Asomugha         | CB
 Trent Williams          | T
 Matthew Stafford        | QB
 Cliff Avril             | DE
 Jared Allen             | DE
 Matt Ryan               | QB
 Brent Grimes            | CB
 Drew Brees              | QB
 Vincent Jackson         | WR
 Calais Campbell         | DE
 Sam Bradford            | QB
 Chris Long              | DE
(21 rows)
```

- The player with the highest salary in the NFL

```
SELECT * FROM players ORDER BY salary DESC LIMIT 1;

 id  |      name      | position |  salary  | team_id
-----+----------------+----------+----------+---------
 589 | Peyton Manning | QB       | 18000000 |      13
```

- The name and position of the first 100 players with the lowest salaries

```
SELECT name AS nfl_player_name, position FROM players ORDER BY salary LIMIT 100;
```

- The average salary for a DE in the nfl

```
SELECT AVG(salary) AS average_salary_with_position_de FROM players WHERE position = 'DE';

 average_salary_with_position_de
---------------------------------
            2161326.377049180328
(1 row)
```

- The names of all the players on the Buffalo Bills

```
SELECT teams.name AS team_name, players.name AS player_name FROM teams, players WHERE teams.id = players.team_id;
```

- The total salary of all players on the New York Giants

```
SELECT SUM(players.salary) AS total_salary_of_new_york_giants FROM players, teams WHERE teams.id = players.team_id AND teams.name = 'New York Giants';

 total_salary_of_new_york_giants
---------------------------------
                        74179466
(1 row)
```

- The player with the lowest salary on the Green Bay Packers

```
SELECT players.name AS player_name, teams.name AS team_name, players.salary FROM players INNER JOIN teams ON players.team_id = teams.id AND teams.name = 'Green Bay Packers' ORDER BY players.salary LIMIT 1;

  player_name   |     team_name     | salary
----------------+-------------------+--------
 Shaky Smithson | Green Bay Packers | 390000
 ```
