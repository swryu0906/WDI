# GIFBOMB SMASHR

![GIFBOMB](http://www.animated-gifs.eu/war-bombs/0031.gif)

## Step 0

** We will be using the Giphy API for this homework assignment. I would suggest reading through the documentation for it. Every API has its own documentation and its own way of working. Read about the Giphy API here : https://github.com/Giphy/GiphyAPI. Read up on all the different end points. **

## Step 1

- Setup and configure your express app with all the modules you might need for this application. Configure your app in a `server.js` file.
- Have express serve your public folder statically
- Your public folder should have an `index.html` and an `app.js`

## Step 2

- Create some basic routes. The routes should be as followed
	- '/'
	- '/random'
	- '/kittens'
	- '/puppies'
	- '/pokemon'
	- '/searchGif/:searchParameter'
	- '/searchGifById/:id'

## Step 3 

- Lets define our routes now
	- `'/'` : Should do nothing and just load up our index page
	- `'/random'` : Should make a request to the Giphy `RANDOM API Endpoint` and get the JSON for ONE RANDOM gif.
	- `'/kittens'` : Should make a request to the Giphy `SEARCH API Endpoint` and get a JSON for KITTEN GIFS. Limit your gifs to 20 if you get a lot.
	- `'/puppies'` : Should make a request to the Giphy `SEARCH API Endpoint` and get a JSON for `puppy GIFS`. Limit your gifs to 20 if you get a lot.
	- `'/pokemon'` : Should make a request to the Giphy `SEARCH API Endpoint` and get a JSON for `pokemon GIFS`. Limit your gifs to 20 if you get a lot.
	- `'/searchGif/:searchParameter'` : Should make a request to the Giphy `SEARCH API ENDPOINT` and get JSON for whatever the `:searchParameter` is. 
	- `'/searchGifById/:id'` : Should make a request to the Giphy `SEARCH BY ID API ENDPOINT` and get JSON for the gif that you searched for by using the id from `:id`

## Step 4

#### Lets set up our `index.html` page

- Make a button that says `RANDOM`
- Make a button that says `KITTENS`
- Make a button that says `PUPPIES`
- Make a button that says `POKEMON`
- Have an input field that will accept a searchParameter for searching gifs. Make a button that says `SEARCH GIFS` next to that input field
- Have an input field that will accept an ID to search for gifs by ID. Make a button that says `SEARCH BY ID`

## Step 5

#### Lets set up our `app.js` file

- Create an event listener for the `RANDOM` button. When the button is clicked, it should make an AJAX request to our `/random` route, which will give us JSON for one random gif.
- Create an event listener for the `KITTENS` button. When the button is clicked, it should make an AJAX request to our `/kittens` route, which will give us JSON for 20 kitten gifs.
- Create an event listener for the `PUPPIES` button. When the button is clicked, it should make an AJAX request to our `/puppies` route, which will give us JSON for 20 puppies gifs.
- Create an event listener for the `POKEMON` button. When the button is clicked, it should make an AJAX request to our `/pokemon` route, which will give us JSON for 20 pokemon gifs.
- Create an event listener for the `SEARCH GIFS` button. When the button is clicked, it should get what the user typed in the input field, and make an AJAX request to `/searchGif/:searchParameter` and passing what the user typed in, into that `:searchParameter`. So if I typed in cars, and pressed the button, I should be making an AJAX request to `/searchGif/cars`.
- Create an event listener for the `SEARCH BY ID` button. When the button is clicked, it should get the ID of the gif from the input field, and make an AJAX request to `/searchGifById/:id` and passing what the user typed in, into the `:id`. So if I typed in KsJaSleSeews911 , and pressed the button, I should be making an AJAX request to `/searchGifById/KsJaSleSeews911`

## STEP 6

#### DISPLAYING OUR SUITE SUITE GIFS

** We are no longer server doing server side rendering, so our controller is no longer giving us a file to load, it is just giving us JSON. With this JSON we must construct what our users will see. We will be making functions that construct the view for our page using JSON. These functions will take JSON as an argument, loop through each thing in the JSON and create a div for each thing in it **

- Our gifs should be displayed like this ...

```html
<div>
	<img src="source of the gif">
	<p>ID OF THE GIF</p>
</div>
```

- Create a function that takes in JSON as an argument. The function should loop through the JSON and for each gif object in the JSON it should create a DIV for each gif. The div should look like the example above.

- BONUS : Make it so when the gifs load, the images are static and aren't moving. When you hover over the image they animate and look like a gif. Giphy gives us different links to the images, some are stills some are gifs.




