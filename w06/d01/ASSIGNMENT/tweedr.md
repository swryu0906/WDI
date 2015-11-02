#### Learning Objectives

- Build a web app following the rMVC structure of Rails
- Create a database and seed file using Rails conventions
- Use rails console to test/inspect the database and associated models

# Tweed.r

Your assignment tonight is to build a simple text/status-based social media app.

![Imgur](http://i.imgur.com/2LlEyPd.png)

### Step 1 - New App

Create a new Rails app in your day folder. Make sure that your database is set
to PostgreSQL.

__PRO-TIP__: suffix all of your apps with `_app` to ensure that there are no
naming clashes with the internals of Rails. For example, name your application
`tweedr_app`.

### Step 2 - Models and Database

#### Make 2 Models, Tweed, and Comment. Tweeds should have many comments. Comments should belong to Tweeds.


Generate a new migration for your 'tweeds' table. An individual tweed should
have:

- content (string)
- image_url (string) -> optional on tweed creation
- belongs_to -> author
- created_at (timestamp)
- updated_at (timestamp)

Generate a new migration for your 'comments' table. An individual comment should have :

- content (string)
- belongs_to -> tweed
- created_at (timestamp)
- updated_at (timestamp)

__Name your table columns like they are named above!__


Once you have created your migration

- Create your database
- Run your migration

### Step 3 - Routing and Controllers

Define the Seven Deadly (RESTful) Routes for your app. Each of the routes should be
directed towards an action on your controller.

##### User Stories
- As a user I want see all of the posted tweeds on the homepage, so that I can browse quickly and easily.
- As a user I want to be able to view an individual tweed, so that I can focus on one entry.
- As a user when I view an individual tweed, I want to see its comments.
- As a user I want to be able to post a new tweed, so that I can share my thoughts with my friends.
- As a user I want to be able to edit a tweed, so that I can fix a mistake I made.
- As a user I want to be able to delete a tweed, so that future employers will not know what I did that one night.
- As a user I want to be able to comment on an individual tweed.

### Step 4 - Seeds

After defining your routes and associated controller actions you should create a
seed file. The seed file should  have a few tweeds, and each tweed should have atleast one comment.

__PRO-TIP__: in your Gemfile require 'pry-rails' to use pry as your default
REPL. Remember, whenever you change your Gemfile, bundle install!

### Step 5 - Views

Create all the views neseccary to accomplish the User Stories. 


#BONUS 

HERES SOME BOILETPLATE HTML CSS CODE...

```html
<!DOCTYPE html>
<html>
<head>
  <title>TweedrApp</title>
  <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track' => true %>
  <%= javascript_include_tag 'application', 'data-turbolinks-track' => true %>
  <%= csrf_meta_tags %>
</head>
<body>
  <div id="container">
    <div id="header">
      <a href="/tweeds"><h1>Tweed.r</h1></a>
      <a href="/tweeds/new">New Tweed</a>
    </div>
    <div id="main">
      <%= yield %>
    </div>
    <div id="footer">
      <a href="#">About</a> |
      <a href="#">Help</a> |
      <a href="#">Terms</a> |
      <a href="#">Privacy</a> |
      <a href="#">Developer</a> |
      <a href="#">Jobs</a>
    </div>
  </div>
</body>
</html>
```


```css

body {
  background-image: url('restaurant.png');
  font-family: 'Helvetica Neue';
  color: #333;
}

h1 {
  color: white;
  text-align: center;
}

a {
  color: rgb(133, 200, 197);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  padding: 5px;
  border: 1px solid #ddd;
}

img:hover {
  border: 1px solid gray;
}

input[type=text], textarea {
  width: 90%;
  padding: 6px;
  font-size: 16px;
  border: 1px solid #ddd;
  resize: none;
}

textarea {
  height: 100px;
}

button {
  background: rgb(133, 200, 197);
  border:none;
  border-radius: 4px;
  border-bottom: 3px solid rgb(122, 190, 190);
  border-right: 2px solid rgb(122, 190, 190);
  box-shadow:none;
  font-size: 16px;
  padding: 12px;
  color: white;
  font-weight: 800;
}


/* ==================== */
/*     Section stuff    */
/* ==================== */

#container {
  width: 640px;
  margin: 0 auto;
}

#header {
  padding: 12px;
}

#header a {
  color: white;
  text-decoration: none;
}

#header a:hover {
  text-decoration:underline;
}

#main {
  border-radius: 5px;
  background: white;
  padding: 5px;
}

#footer {
  margin: 12px 0;
  color: white;
  font-size: 14px;
  text-align: center;
}

#footer a {
  color: white;
}

/* ==================== */
/*      Tweed Stuff     */
/* ==================== */

.tweed {
  margin:0;
  padding: 12px;
  border-bottom: 1px solid #dde;
}

.tweed:last-child {
  border-bottom: none;
}

.tweed .author {
  font-weight: 800;
}

.form-field {
  margin: 12px 0;
}

button.danger {
  background: indianred;
  border-bottom: 3px solid firebrick;
  border-right: 2px solid firebrick;
}

```