#Pokemon Express

![PokeExpress](http://i86.photobucket.com/albums/k120/mannynews/Photo_092506_001.jpg)

Tonight we will be building the Pokemon Express using Node, Express and HandleBars!!

### Learning Objectives

* Create a web server using Node.js
* Utilize a URL queries to formulate a response to a request
* Create a consumable API using Express


# Step 1

- You have been provided with all the module dependencies you will need for this assignment. Run `npm install` from your command line while inside of the starter folder.

#### Routes

Test out all of your endpoints through your browser, i.e. if you go to `localhost:3000/pokemons` you should see the data returned by that route.

###### `/pokemons`
- this route should  get all of the pokemon from the poke object. It should render with `pokemons`. 

###### `/pokemons/:id`
- this route should use pokemons to get a single pokemon from the object by their `id` number. Should render with the `pokeInfo` view. 

###### `/pokemons/searchByName`
- this route should find a single pokemon using the query parameters sent to the server
- It should render with `pokeInfo`

###### `/pokemons/searchByType`
- this route should find a single pokemon using the query parameters sent to the server. It should search pokemons for all pokemon that have that type 
- It should render using `pokemons` view

###### `/pokemons/random`
- this route should retrieve a random pokemon from the pokemons, should render with pokeInfo


####LAYOUT

Your layout should have three inputs. Which will send query params to the proper routes. One for search by type, one for search by name and one which is a button that searches random. 


####VIEWS

##PokeInfo

It should render the pokemon, with the following:

* name: h3 tag
* image: img tag
* classification: p tag
* species/type: p tag for each
* hp: p tag
* attack: p tag
* defense: p tag
* moves: each a p tag
* happiness: p tag 
* height: p tag

They should render in a `div` with the id of `poke-info` which is nested inside of a `div` with the id of `solo-pokemon` 

##Pokemons

* name: h3 tag
* image: img tag

Each pokemon should be in a `div` with a `class` of `result`, nested inside of a `div` with the id of `results-container`



##BONUS

When you click a pokemon it should render the info page for that pokemon!!!! Think about what you may need to add to each pokemon in order to do this. Also think about where it makes the most sense to set up the listener for this. 