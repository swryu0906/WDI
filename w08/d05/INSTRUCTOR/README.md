# authtoken examples
play with these routes. you'll notice sometimes i use function expressions
explanation coming soon!

# curl commands

signup

    curl -i -H "Content-Type: application/json" -d '{ "user" :{ "name" : "Enya", "email" : "enya@enya.com", "password" : "password" }}' http://localhost:3000/user/signup

signin / authenticate user

    curl -i -H "Content-Type: application/json" -d '{ "user" :{ "email" : "drake@drake.com", "password" : "password" }}' http://localhost:3000/user/auth

get users (use token)

    curl http://localhost:3000/user -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NjUwMDQwN2Q3NjY4NDI1MzFjYzhlYTEiLCJuYW1lIjoiRHJha2UiLCJlbWFpbCI6ImRyYWtlQGRyYWtlLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA1JG9ZVjJBWFFPeDNnbTVNbm1YdWJLNS53ZFRPTDZvU1F0Q2t2ZW10N21SdmNGeE1uSWY0N0QyIiwiX192IjowfQ.udodYoD3eWcw9Xpk3_-HrAChN39qeDmU4gm6_2mQa4E"

update user (use token)

    curl -i -X PUT -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NjUwMDQwN2Q3NjY4NDI1MzFjYzhlYTEiLCJuYW1lIjoiRHJha2UiLCJlbWFpbCI6ImRyYWtlQGRyYWtlLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA1JG9ZVjJBWFFPeDNnbTVNbm1YdWJLNS53ZFRPTDZvU1F0Q2t2ZW10N21SdmNGeE1uSWY0N0QyIiwiX192IjowfQ.udodYoD3eWcw9Xpk3_-HrAChN39qeDmU4gm6_2mQa4E" -H "Content-Type: application/json" -d '{ "user" :{ "email" : "drake@drake.com", "newEmail" : "meow@meow.com", "newName" : "syed" }}' http://localhost:3000/user/

delete!

    curl -i -X DELETE -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NjUwMDQwN2Q3NjY4NDI1MzFjYzhlYTEiLCJuYW1lIjoiRHJha2UiLCJlbWFpbCI6ImRyYWtlQGRyYWtlLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA1JG9ZVjJBWFFPeDNnbTVNbm1YdWJLNS53ZFRPTDZvU1F0Q2t2ZW10N21SdmNGeE1uSWY0N0QyIiwiX192IjowfQ.udodYoD3eWcw9Xpk3_-HrAChN39qeDmU4gm6_2mQa4E" -H "Content-Type: application/json" -d '{ "user" :{ "email" : "drake@drake.com" }}' http://localhost:3000/user/

# Deploy to Heroku

# Deploying a node Application


- Deploy a Node.js app
- Push and pull from MongoDB using a live web interface
- Compare deployment with Rails and a relational database to Node with a noSQL database


## Heroku and Node

First, we'll need a functioning git repository with our application that includes a package.json file - remember, this is used by Node’s dependency manager.  Just like a `Gemfile`, the package.json file determines the of Node.js used to run your application and includes any dependencies your application needs to run. Upon deployment, Heroku reads this file and installs the correct versions and appropriate dependencies using the  `npm install` command.

## Set up your app for deployment

To verify that the Heroku CLI toolbelt os properly working , type:

```bash
heroku auth:whoami
```

This should display the email corresponding to the logged in account.


#### Procfile

A `Procfile` is a text file in the root directory of your application - it's used to declare, to Heroku's computers, what command should be run to start your application. Since we are no longer in development, we are not going to be responsible for starting up our server. The `Procfile` will act as a sort of configuration file for Heroku.  To get started we only need one command in there, and the command denoted will declare: a single process type, web, and the command your app needs. `web` is crucial for this file - it's saying that this process type will be attached to the HTTP routing stack of Heroku and take web requests when the application goes live.

As you would imagine, Procfiles can contain more commands and processes. Think about a background job that works through jobs in a queue or a task you would want to run daily.  

To set this up, in the main or root directory of your application create a new file called `Procfile` - you do not need to add a file extension.  Add the following line to the `Procfile`:

```
web: node app.js
```

#### Change the urls for production

If you take a look in `app.js`, you should see the code that create the connection to mongoDB:

```
moongoose.connect('mongodb://localhost/tokensandauth');
```

The URL `'mongodb://localhost/tokensandauth'` is obviously only valid when we are running the app locally, but on Heroku, we need to use a url that is stored in the environment variables by Heroku.

To do this we will use a Heroku add-on - think the AppStore but for developers. Heroku add-ons give us the option for extra functionality and services that we can add to our Heroku application. The add-on that we will use to host our mongo Database is called mongolab.  Everytime you add this add-on to an Heroku app, this action will add the environment variable `MONGOLAB_URI` to the Heroku app.

To access environment variables in a node app, we can use `process.env`.

#### env variables?

We need to assign certain config variables that are ***not*** checked into our repository. The reason being that if someone gets access to our repo or if it is public they can use that info to "hack" our app.

We'll be using variables that are already set by heroku and we'll also be setting one of our own. specifically our `secret` variable used to create our JSON web tokens.

All you have todo is simple add `export SECRET="omgwtfbbq"` at the end of your bash profile. (usually located under ~/.bash_profile on a mac) and you'll be able to use it in your app as `process.env.SECRET`.

What should you store in env variables? Anything that is tied to a account key or api secret ket.

You can also set config variables in heroku as well, we'll need to assign our secret variable so we can deploy.

https://devcenter.heroku.com/articles/config-vars


In the code, we will use the `MONGOLAB_URI` value if it exists and use the local one is it doesn't - this will prevent us from having to change the value wether we run the app locally or on Heroku.  Check it out:

```javascript
var mongoUri =  process.env.MONGOLAB_URI || 'mongodb://localhost/tokensandauth';
moongoose.connect(mongoUri);
```

#### Change the urls for production

We'll have to apply the same logic we wrote for the db connection to the the port where the app is running.  This port will be automatically assigned by Heroku and be stored under the key `PORT` in the environment variables. Around the line 24, you can see the port where the app is open:

```javascript
app.listen(3000)
```

Replace this code with:

```javascript
app.listen(process.env.PORT || 3000 )
```

#### Commit all changes and deploy!

Now our codebase is ready to be deployed, but first, we need to add mongolab to our Heroku app:

```
heroku create
```

```bash
heroku addons:create mongolab:sandbox
```

set env variable!

```
heroku config:set SECRET=omgwtfbbq`
```


##### You can verify the remote in your git configuration as well:
```
$ git remote -v
heroku  https://git.heroku.com/falling-wind-1624.git (fetch)
heroku  https://git.heroku.com/falling-wind-1624.git (push)
```
You can also take an existing Git repository and add a remote using the git URL provided when you created your app.

You may need to do this to associate a Git repository with an existing application.

**The heroku `git:remote`` command will add this remote for you based on your applications git url.**
```
$ heroku git:remote -a falling-wind-1624
Git remote heroku added.
```

The remote is named heroku in this example, but you can name the remote anything you want by passing -r other_remote_name. You may find it easier to follow the examples if you stick to using the heroku remote rather than using one with a different name.


`git add` and `git commit` all the changes and then deploy them by typing

```bash
git push heroku master
```


#### You made it!

Remember, you can always type in `heroku open` to launch the application from the command line.


## Tools for production in Node


There are a couple of tools we can use in production for troubleshooting and error handling:

`heroku restart` will let us restart our server and make sure all of our configuration details are up-to-date.  You'd be surprised how much can be fixed by simply restarting the server; it's a big reason Heroku restarts every one of its applications daily!

Again, for efficiency, `heroku open` will open up your app in the browser.

If there are errors, you can use the command `heroku logs` to get a print out of the production logs for your application. These are just like the logs we had printing to our console in development mode. With this, you'll be able to search for what caused your application to crash and debug. Remember any changes you make to your application locally will require you to add, commit, and push to Heroku again. You **do not** need to repeat the database configuration.

If the app is not working locally, don't go further.  It will not work on Heroku. You need to have a working app locally first.
