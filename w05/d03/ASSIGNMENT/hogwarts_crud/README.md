# OH NO!

![:image](http://media.tumblr.com/tumblr_lkcdbhvjCH1qeg89k.png)

It just so happens that all of the wizards of consequence in the magic world have been students of the Hogwarts School of Witchcraft and Wizardry, however the school has lost all its magic and now NOTHING WORKS!

As a member of Dumbledore's Army it's up to YOU to set up some ingenious Muggle gadgetry to keep the school up and running!

> Reparo!

## Learning Objectives

- Practicing setting up databases
- Learning to set up test databases and testing commands within them
- Practicing integrating SQL into Sinatra apps using the PG gem
- Practicing displaying templated data in RESTful routes
- Learning to implement CRUD apps in Sinatra
- Learning to use method overrides to implement patch and delete HTTP actions

## Setup

Start by creating a database and running:

`createdb hogwarts_crud`

Then seed the database by running:

`psql -d hogwarts_crud -f seed.sql`

In your server.rb file make sure to initialize a database connection using the 'pg' gem. (It should be required before your code runs)

`db = pg.connect dbname: 'hogwarts_crud'`

---

It may be helpful to create a test database so you can practice editing and deleting data from tables, then setting the same seed data as your 'live' database.

 1. `createdb hogwarts_crud_test`

 1. `psql -d hogwarts_crud_test -f seed.sql`

## Completion

You've been provided with a scaffold Sinatra app that you will build according the the prompt. For the first few parts, when you can display all the houses and students and view their pictures you'll know things are working properly. Completion for this assignment is up to (and including) ***part 4***.  As always, healthy living is best.

## Part 1 - Accio Students! - Reading

  Your index page already contains a link to `/students`. The students route handler and the template are already in your project. Write the handler to connect the route to the view, and supply it with the relevant data. The data here is a list of all students from Hogwarts. You will have to query the database using your PG connection to get all student info, and supply it to the view. In the view, iterate over all of the student names and create a link to their specific profile on the page. i.e

  `<a href="/students/8">Albus Dumbledore</a>`

  **Testing Queries** If you're unsure about which queries to use, this is a good time to go into the test database and figure out what commands you can use. To save you the trouble of having to reinitialize your database connnection over and over again, take a look at `spike.rb`. In pry, you can run `load 'spike.rb'`, and it'll give you a database connection to use. If you find yourself writing the same queries repeatedly, feel free to save them into variable in the `spike.rb` file for later use.


## Part 2 - Accio *Individual* Students! - Reading

  Write out the route handler for `/students/:id' to a new erb template called `student.erb`. In this erb file, create a div with the class "student" that contains an h1 tag and an img tag. In the h1 tag, put the student's full name. In the img tag, put the student's `image` value from the database and populate the alt text with a good description.

## Part 3 - Accio Houses! - Reading

  Students of Hogwarts are split into separate houses. Create the route handler for `/houses`, linked from the index page, which serves the template `houses.erb`. You must query the database for all houses, and iterate over them in the view. Each iteration will create a div on the page with class "house", that contains an h2, and an img tag. The h2 tag should be dynamically populated to create a link to the house by its id, i.e: `<a href="/houses/1">Gryffindor</a>`. The img tag should contain the img url obtained from the database.

## Part 4 - Accio All Students from a House - More Reading

  You've shown the houses together, but the house heads need a list of all of the students they are in charge of. Build a dynamic route in your `server.rb` for `/houses/:id` that will query the database for the house based on the id, and a separate query for all students whose `house_id` value matches `:id` supplied by the route call.

  In the view, show the house sigil by displaying the house and img in a div with the class "house".

  Below the house div, create a new div with the class "roster". Inside this div, iterate over your students collection, which creates a div with class "student", that contains an h1 with the student's name, and an img tag that displays the student's photo.

## Part 5 - Updating the Students list

  Update your `/students` page so that each students name has next to it another link to their affiliated house. ***HINT*** Look at the routes to accesss each house. Do they match up with the student's house_id?

## Part 6 - Expecto Patronum - Creation

  In the index path, '/', create a new form tag that sends a POST request to '/student/new'. This form must ask for a first name, last name, image url, and a dropdown list of available houses. You'll have to query the database for each house.

  Drop downs are done with the `<select>` tag, and can be populated with `<option>` tags. You will iterate over the houses from your query and iterate inside the select tag to create them. An example option tag output for this form is shown below:

  `<option value="4">Slytherin</option>`

  The route handler for this form's submission should take the values from the form and save them to the `hogwarts_crud` table. You can look at the student table's schema in `seed.sql` to see what values are required. How would you set form inputs as required to prevent the form from submitting?

  Save the return value of the query you wrote and use it to redirect the user to the newly created student's id. By default you get back an empty PG::Request object, but by using the [RETURNING](http://www.postgresql.org/docs/8.3/static/sql-insert.html) keyword, you can get back the new student's id, and call .entries on the response object to get the number and put it in the redirect call.

## Part 7 - Avada Kedavra - Destroy

  In your student view, create a form with a method override to send a DELETE request to `/students/:id` and in your handler delete the student by their id. Afterwards, redirect the user to `/students`

  Remember that method overrides are not a default feature in Sinatra, so you have to run this command in your `config.ru` file( BEFORE `run Hogwarts::Server`):

  `use Rack::MethodOverride`


## Part 8 - Riddikulus - Update

  In each student's individual page and a link to `/students/:id/edit`, with `:id` being their id number from the database. The view for this page should contain a form that let's us change all of the student's information except their id ( looks ***awful similar*** to the student creation form...). Query the database for the student's info, and use it to set the default values of this form.

  Override the method of this form to submit a PATCH request to '/students/:id', and in it's handler use the value in `:id` to target the correct row in the database and update the values based on the form input.


## Bonus

- **Styling**: Some of the student portraits are leaking out of their divs. Edit the CSS to correct this!
- Add functionality so students can enroll at Hogwarts (with a link to create a new student). You should implement a sorting hat method so that when a new student is created they are randomly assigned to one of Hogwarts' four houses. (Where do you think this logic should go?)



