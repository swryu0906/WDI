![bttf2](http://i.giphy.com/Zvlcq5dutpirC.gif)

# Working with the OMDB API

We're going to practice making AJAX calls to an API, saving data to a Mongo database via Mongoose, password encryption, and client-side templating. Do as much as you can, but healthy living is most important.

Step 0.
- Create a new Express App.
- Include jQuery
- Include handlebars.js
- Read about [AJAX post requests](http://api.jquery.com/jquery.post/)

Step 1.
- Checkout http://www.omdbapi.com/
- What happens if you visit "http://www.omdbapi.com/?t=star+wars"?
- Analyze the response. What is the content type?
- Use AJAX to make a request to `http://www.omdbapi.com/?t=SOME+MOVIE`
- Hard code in a movie title
- Console.log the return

Step 2.
- Add a button on "/" that triggers the AJAX call when clicked.

Step 3.
- Add a form on "/" that that accepts a movie title, then when the button is clicked hit the OMDB API to return information on that movie. Name the submit button 'OMDB'.
- Console.log the return

Step 4.
- Instead of using console.log to show the return, append the movie information
to the DOM using Handlebars.js templating.

Step 5.
- Make a button `KEEP`, which saves movie data to a database.
  - When clicked, the `KEEP` button will make an AJAX POST request, sending to your database the following:
    - Movie Title
    - Director
    - Actors
    - Released
    - Plot  

- Make a form, which takes new movie information that YOU can make up, and stores it to a database. Be Creative!
- To do all of this, create a Mongoose Model called `Movies` and a Schema called `movieSchema`.
  - Your model should link to a  `movies` collection in a Mongo database entitled `entertainment`.


Step 6.
- Create signup, and log-in/log-out functionality in your app. You can use curl for this, but bonus points if you can do this via a form.
    - Create a Mongoose model, `Users`, and a schema called `userSchema`.
    - Your model should link to a `users` collection in your `entertainment` database.
- Users should have:
    - Name
    - Email (should be unique)
    - Password
- Enable password encryption by using the `bcrypt` module. Again, you can use curl to verify log-in feature.
 ```
 curl -i -H "Content-Type: application/json" -d '{
"user" : {
"email" : "a@bb.com",
"password" : "password"
}
}' http://localhost:3000/login
```

Bonus
- Can you create a search box to display movie titles?
- If you click on a movie title display the movie poster.

Super Bonus
- Now that you are so awesome at this, go ahead and add 'PUT' and 'DELETE' routes to update and remove movies respectively from your `movies` collection.

What? Hungry for more!!??
- Fine! Create an avatar to appear when a user logs in using the [Gravatar](https://en.gravatar.com/) API. Now, go to bed!
