#Super Secret Diary

![Diary](https://lh6.ggpht.com/5pe2dLIdEB88M8nW6VmaStz3gkmQubU99VvGurFY4-LYsqcnBrKwhjuavYsd=w300)

## Tokens, Log-in, posts

Tonight we are making a simple app, in which the user can create a new account, Log-in with tokens to view his/her own blog-post entries, and be able to create new blog-posts.

Step 0.

Create a new Express App.

Step 1.

Setup the server dependencies
- install Express
- install Body-Parser
- install Morgan
- install Mongoose
- install jsonwebtoken
- install express-jwt
- install bcrypt


Step 2.

In a `controllers` folder  build the controller code

Get Routes
- Setup a home route
- Setup a login route
- Setup a create-user route
- Setup a user/:id route

When the home route is hit, the server will check if the users token is valid

If there isn't a valid token the server will redirect the user to the login route.

Post Routes
- Setup a create-user route
- Setup a login route
- Setup a user/:id route

When the user creates or logs in successfully, it will redirect the user to his/her own user route.


Step 3.
## Wire it all up

- Create the schema (Mongo/Mongoose) file in a `models` directory
- build the methods to encrypt new user passwords


In your routes:

- build the methods that will find user in db by ID
- build the methods that will create new user
- build the methods that will create new post
- build the methods that will find all posts

Step 4. (build views)

Build the necessary handlebars templates to render the data returned from our routes i.e. login form and blog posts etc.

Make sure the `<form action=` is hitting the correct route.

Make sure when the user hits their own id route it renders all the posts they have created.

When they submit a new post it should add to the database and render in the html.


Bonus
- CSS
