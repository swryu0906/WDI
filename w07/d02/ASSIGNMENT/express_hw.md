#EXPRESS YOURSELF!!


## Learning Objectives
* Pracitce setting up express applications.
* Practice creating custom routes.
* Practice using parameters from a a request.



####Tonight you will be using your new found skills to create `four seperate` suite suite express apps.
__________________________________________________________
__________________________________________________________

<br>
#Tip Calculator APP
- Create an express application.
- Your app should have a route of `'/tip'` and it should expect 2 params. One of which should be `total` and one should be `tipPercentage`.
- When hitting the route the page should display how much you tip will be based on the total ammount of the bill and the tip percentage. (ex. hitting `'/tip/100/20'` should display `20` on the page).


<br>
#Magic 8 Ball APP
- Create an express application.
- Create a route of `'/magic'` that should expect one parameter which is a question to ask the 8ball.
- The params of the route should be a question. (ex. `'/magic/Will%20I%20Be%20A%20Millionaire'`)
- Remember that we can't use spaces in the url, so we use `%20` to express a space in the url.
- So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random 8ball quote on the  screen.
- Use this array of 8ball quotes..... `["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]`




<br>
#Calculator APP
- Create a express application.
- Create a route for each math operation.
- Math operations are `addition`, `subtraction`, `multiplication`, `division`
- Each route should consist of an operation and 2 parameters which should be numbers (ex. `'/addition/2/4'`).
- When hitting the route, it should display the value of the 2 numbers and operation (ex. `'/addition/2/4'` should give us `6` on the page).

###Bonus
- Create your own custom math operations
- Try making it so that there is only one route for all these operations

<br>
#Fibonacci App
- Create a express application.
- Create a route 'fibonacci'
- This route will take one param, the number we will operate on.
- If the number param is not a fibonacci number, print out "Brah, I can tell this ain't a fibonacci number. Wack."
- If the number is a fibonnaci number print out "Sweet number, dude."

###Bonus 1:
- If the number is a fibonacci number, print the index in the sequence of all numbers (starting from 1)
- Print the sum of all fibonacci numbers up to and including your number.

###Bonus 2:
- Use recursion to write the function that sums the fibonacci numbers.
