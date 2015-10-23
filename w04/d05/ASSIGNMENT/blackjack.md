# BLACKJACK

![BlackJack](http://d2ws0xxnnorfdo.cloudfront.net/character/meme/blackjack-bender)

#### Prompt

We will be creating an object oriented game of BlackJack in Ruby that will be playable in the console. The game will be dealing with multiple classes. We will have a `Card`, `Hand`, `Deck`, `Player`, `Dealer`, and `Game`

## Class Specifications

### Card

- Should have a suit (heart, diamond, spade, club)
- Should have a kind (Jack, 10, 7, Queen, etc...)
- Should have a value (If the kind is Jack, the value should be 10)

### Hand

- A hand can hold cards but does not start with any
- A hand should be able to add a card to itself
- A hand should be able to get the hand value of checking all of its card's values

### Deck

- Should be able to construct a proper deck of 52 Card objects
- Should be able to shuffle itself
- Should be able to remove a random card
- Should be able to reset itself 

### Player

- Should have a hand
- Should be able to hit
- Should be able to stay
- Should be able to tell if his hand is a bust
- Should be able to tell if his hand is a win

### Dealer

- The dealer technically does all the same things that a player does so maybe he should inherit from Player?
- The one thing that is different about the dealer are the rules which he must follow. A dealer can only stay if he has a certain hand value. Read up on the blackjack rules

### Game

- Should have a Deck
- Should have a Player
- Should have a Dealer
- Put in here what you think the game should have. Maybe you want methods that print out some messages? Maybe a win method that prints out a winning message? Or a bust method that prints out a losing message?

## The APP

- You should have each class in its own seperate file
- Load all your classes into your `main.rb` file using `require_relative`
- Your main game loop should exist in the `main.rb` file
- Needs to be playable through console
- ** If you feel like you want your classes to have extra behaviors, go for it **

## Bonuses 

- Make it so that an Ace can be either 11 or 1
- Make betting possible
	- Think about what classes will keep track of the money?
	- What classes will be doing the actual betting?
- Make splitting possible 
- Use ASCII art 


# Some reading material to get ready for next week

 - SQL W3 Intro
 	- http://www.w3schools.com/sql/sql_intro.asp
 	- Flip through some of the chapters
 - RDBMS (Relational Database managment system)
 	- https://en.wikipedia.org/wiki/Relational_database
 