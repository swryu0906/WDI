# San Diego Zoo Message Board

![img](http://images.familyvacationcritic.com/sd-zoo-safari-rolling-safari.jpg)

The San Diego Zoo's marketing team has been busy! In order to drum up public interest in the zoo, they've decided to start a message board in order to share information about several of their cuter inmates. They need YOU to create a website where each animal (or their opposably-thumbed representative) can log in as a user and write adorable updates for their fans.

### Objectives

Tonight, you'll practice allowing users to log in using **sessions**. Your application should include a model for a `user` that includes their username and password. You'll be storing this information in your database.

You should seed your database with the following creatures (users):
  - Connie, the [California Condor](http://animals.sandiegozoo.org/animals/california-condor)
  - Paul, the [Giant Panda](http://animals.sandiegozoo.org/animals/giant-panda)
  - Elsa, the [African Elephant](http://animals.sandiegozoo.org/animals/elephant)

 You should also create a `Post` model. The Post model will be the posts that the users create. Set up the right relationship between posts and users, and have post have the columns that you see fit.

#### User Stories

1. A user should be able to create a new account.
2. An existing user should be able to log in to your site.
3. A logged-in user should be able to create a new post, delete a post, or edit an existing post for their message board.
4. If a user attempts to edit, create or delete a message without being logged in, they should not be allowed to do so!
5. A user should see all the users that are created.
6. When viewing an individial user, that users posts should also be visible.
7. A user should see all the Posts
8. Viewing an individual Post, the user should also see the comments for that Post

## Bonus

1. Give your fuzzy users avatars - allow them to input a link to a custom image.
2. Add a public view page! Allow non-logged-in users to view any given animal's messages. After all, this is supposed to attract public attention!
3. Set up some basic validations
4. Make this site look *good*. Style it up using hand-rolled CSS and/or a framework.