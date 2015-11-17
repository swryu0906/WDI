### Part 2 Select by comparison

#### Select all the vampires that:

have greater than 500 victims

> db.vampires.find({ victims: { $gt: 500 }}).pretty();

have fewer than or equal to 150 victims

> db.vampires.find({ victims: { $lte: 150 }}).pretty();

have a victim count is not equal to 210234

> db.vampires.find({ victims: { $ne: 210234 }}).pretty();

have greater than 150 AND fewer than 500 victims

> db.vampires.find({ victims: { $gt: 150, $lt: 500 }}).pretty();



### Part 3 Select by exists or does not exist

#### Select all the vampires that:

have a title property

> db.vampires.find({ title: { $exists: true }}).pretty();

do not have a victims property

> db.vampires.find({ victims: { $exists: false }}).pretty();

have a title AND no victims

> db.vampires.find({ title: { $exists: true }, victims: { $exists: false }}).pretty();

have victims AND the victims they have are greater than 1000

> db.vampires.find({ victims: { $exists: true, $gt: 1000 }}).pretty();



### Part 4 Select objects that match one of several values

#### Select all the vampires that:

love either frilly shirtsleeves or frilly collars

> db.vampires.find({ loves: { $in: [ "frilly shirtsleeves", "frilly collars" ]}}).pretty();

love brooding

> db.vampires.find({ loves: "brooding" }).pretty();

love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music

> db.vampires.find({ loves: { $in: [ "appearing innocent", "trickery", "lurking in rotting mansions","R&B music" ]}}).pretty();

love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *

> db.vampires.find({ loves: { $in: [ "fancy cloaks" ], $nin: [ "top hats", "virgin blood" ] }}).pretty();



### Part 5 Select with OR

#### Select all the vampires that:

are from New York, New York, US or New Orleans, Louisiana, US

> db.vampires.find( { $or: [{ location: "New York, New York, US" }, { location: "New Orleans, Louisiana, US" }]}).pretty();

love brooding or being tragic

> db.vampires.find( { $or: [ { loves: "brooding" }, { loves: "being tragic" } ]}).pretty();

have more than 1000 victims or love marshmallows

> db.vampires.find( { $or: [ { loves: "marshmallows" }, { victims: { $gt:1000 }}]}).pretty();

have red hair or green eyes

> db.vampires.find( { $or: [ { hair_color: "red" }, { eye_color: "green" }]}).pretty();



### Part 6 Negative Selection

#### Select all vampires that:

love ribbons but do not have blonde hair

> db.vampires.find( { $and: [ { loves: "ribbons"}, { hair_color: { $nin: ["blonde"]}}]}).pretty();

are not from Rome

> db.vampires.find( { location: { $nin: ["Rome"]}}).pretty();

do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]

> db.vampires.find( { loves: { $nin: ["fancy cloaks", "frilly shirtsleeves", "appearing innocent", "being tragic", "brooding"]}}).pretty();


have not killed more than 200 people

> db.vampires.find( { victims: { $lt:200 }}).pretty();




### Part 7 Accessing the database through a node/express app

#### Using what you learned today:


initalize a node app



require express



require mongodb



establish a MongoClient connection with your monsters database and vampires collection



display the list of vampires with their name, hair_color,


eye_color, dob, loves, location, and gender to the DOM using AJAX when the user goes to '/'




### Part 8

Modify '/' to only show a list of the vampires' names, each of which is a link that goes to a page that shows that vampire's name, plus their name, hair_color, eye_color, dob, loves, location, and gender.



### Bonus Collect more vampire info

Prompt the user to enter in the following vampire information:
Name
DOB
Hair Color
Eye Color
Loves (this can be a single value for this for this case).
Location
Gender
Victims
Title
If you can't think of good names you can try this website to - generate them: vampire generate
Enter your new vampires into your vampire collection
BONUS BONUS: At the end of the prompt, ask if the user wants to enter in another vampire and if yes, repeat the prompt.
