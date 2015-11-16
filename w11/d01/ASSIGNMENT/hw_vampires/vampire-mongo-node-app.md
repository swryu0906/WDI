# Vampires!

![Interview with the Vampire](https://mischiefmanagedsite.files.wordpress.com/2014/05/3.gif)

### Setup

1. Create a `monsters` mongo database.
2. Create a `Vampire` model.

### Completion
Do through the end of part 7. Remember, more is better, healthy living is best.

### Part 1

Using the `Vampire` model, seed your database with the vampires in `populateVampires.js`.  

***For the following parts, write mongo queries in your CLI, and when you figure out the right answer, copy the correct mongo queries into a `selectVampires.md` file that you should make in today's `student` directory.***

### Part 2
#### Select by comparison

Select all the vampires that:
  - have greater than 500 victims
  - have fewer than or equal to 150 victims
  - have a victim count is not equal to 210234
  - have greater than 150 AND fewer than 500 victims

### Part 3
#### Select by exists or does not exist
Select all the vampires that:
  - have a title property
  - do not have a victims property
  - have a title AND no victims
  - have victims AND the victims they have are greater than 1000

### Part 4
#### Select objects that match one of several values
Select all the vampires that:
  - love either `frilly shirtsleeves` or `frilly collars`
  - love `brooding`
  - love at least one of the following: `appearing innocent`, `trickery`, `lurking in rotting mansions`, `R&B music`
  - love `fancy cloaks` but not if they also love either `top hats` or `virgin blood`
    \* *Hint-You will also have to use $nin* \*

### Part 5
#### Select with OR
Select all the vampires that:
  - are from `New York, New York, US` or `New Orleans, Louisiana, US`
  - love `brooding` or `being tragic`
  - have more than 1000 victims or love `marshmallows`
  - have red hair or green eyes

### Part 6
#### Negative Selection
Select all vampires that:
  - love `ribbons` but do not have blonde hair
  - are not from Rome
  - do not love any of the following:
  [`fancy cloaks`, `frilly shirtsleeves`, `appearing innocent`, `being tragic`, `brooding`]
  - have not killed more than 200 people

### Part 7
#### Accessing the database through a node/express app
Using what you learned today:
  - initalize a node app
  - require `express`
  - require `mongodb`
  - establish a `MongoClient` connection with your `monsters` database and `vampires` collection
  - display the list of vampires with their name, hair_color, eye_color, dob, loves, location, and gender to the DOM using AJAX when the user goes to `'/'`

### Part 8
Modify `'/'` to only show a list of the vampires' names, each of which is a link that goes to a page that shows that vampire's name, plus their name, hair_color, eye_color, dob, loves, location, and gender.

### Bonus
#### Collect more vampire info

- Prompt the user to enter in the following vampire information:
  - Name
  - DOB
  - Hair Color
  - Eye Color
  - Loves (this can be a single value for this for this case).
  - Location
  - Gender
  - Victims
  - Title
- If you can't think of good names you can try this website to - generate them: [vampire generate](http://vampire.namegeneratorfun.com/)
- Enter your new vampires into your `vampire` collection
- BONUS BONUS: At the end of the prompt, ask if the user wants to enter in another vampire and if yes, repeat the prompt.
