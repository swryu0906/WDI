# HappiTails

![HAPPITAILS](http://www.htpet.net/i/Logo.jpg)

#### Prompt

> You are the manager at HappiTails animal shelter. You need to manage your shelter by storing and manipulating information about clients and animals.
Specification:



## Object Specs:

### Animal:

- An animal should have a name.
- An animal should have a species.
- An animal can have multiple toys, but doesn't start with any.

### Client:

- A client should have a name.
- A client should have an age.
- A client can have multiple pets (animals), but it doesn't start with any.


### Shelter:

- A shelter should have a name
- A shelter can have multiple animals, but it doesn't start with any.
- A shelter can have multiple clients, but it doesn't start with any.
- A shelter should be able to display all of its clients.
- A shelter should be able to display all of its animals.
- A shelter should be able to facilitate an adoption (one of its clients adopting one of the animals from shelter)
- A shelter should be able to facilitate a return (one of its clients returning his/her pet to the shelter)

## Steps :

### Commit 1

- Define the animal, client and shelter classes according to the specs. Each class should have the appropriate attributes and initialize method. Define each class in its own seperate file. EX. The `Shelter` class should be in the file `shelter.rb`, The `Client` class should be in the file `client.rb`.
- Test these out with pry to make sure you can create the objects and that they do what you think the should do. Check the methods that you wrote too!

### Commit 2

- Create a main.rb (This will be the main program loop)
- Require all your files into `main.rb`. This will allow you to use the classes you defined in the other files. HINT : use `require_relative`
- It should create a new shelter for you
- It should display a menu of options for the user to choose from:
	- Create an animal
	- Create a client
	- Quit
- When creating an animal or client, the user is prompted for information like names, age etc. Newly created animals and clients should be added to the shelter.

### Commit 3

- Add options to the menu so that a user can:
	- Display all animals
	- Display all clients

### Commit 4

- Add options to the menu so that a user can:
	- Facilitate client adopts an animal. This means the client now has the animal and they should no longer be a part of the shelter.
	- Facilitate client puts an animal up for adoption. This means the client no longer has the animal and it should be added to the shelter.

### Commit 5

- Create a seeds.rb file 
- seed.rb initializes a shelter as well as a few animals and clients so you have some data to start with when you run your program.
- require your seed file in your `main.rb` file. Your seed file will instantiate all your objects. So you should no longer have `Client.new()` or `Shelter.new()` anywhere in your `main.rb` file. All object instantiations should be in `seed.rb`

### Commit 6 (Bonus)

- Refactor your code
- Use inheritance to define puppy and kitten classes that inherit from Animal.
- Create methods on shelter to display all animals, just kittens or just puppies.
- Alter seed.rb to create kittens or puppies
- Add further options to the menu so that a user can:
	- Display all puppies
	- Display all kittens

### Commit 7 (Bonus)

- Limit the number of animals a client can adopt to 2 per client. If they try to adopt more than that, yell at them.
- Refactor your code to have `attr_reader`'s and `attr_writer`'s. HINT : `attr_accessor` is both of them in one
- Refactor your code to make sure it is DRY (Don't Repeat Yourself) and all your methods are in the appropriate classes.

### Commit 8 (Bonus)

- Add a new class that inherits from your client class called CatLady. A cat lady only takes cats, and takes as many cats as there is space in a computer's memory.