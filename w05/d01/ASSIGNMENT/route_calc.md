# Sinatra Calculator

![Sinatra being Sinatra](http://www.theperfectpleasure.com/wp-content/uploads/2011/11/Frank-Sinatra.jpg)

Built a calculator App with Sinatra. Using parameters, the app should calculate the value and render it in the browser.

Examples:

|  Sample Path        | Info On Page     |
| -----------         | ------------     |
| /calc/add/3/4       | Sum: 7.0         |
| /calc/add/89/21     | Sum: 110.0       |
| /calc/subtract/45/4 | Difference: 41.0 |
| /calc/subtract/8/3  | Difference: 5.0  |
| /calc/multiply/4/5  | Product: 20.0    |
| /calc/multiply/3/3  | Product: 9.0     |
| /calc/divide/9/3    | Quotient: 3.0    |
| /calc/divide/10/4   | Quotient: 2.5    |


## Setup

Work in the `w05/d01/ASSIGNMENT` directory. Make a `homework` directory in which you put all other files. Remember you'll need a `Gemfile` and `config.ru`. `bundle init` will create the `Gemfile`, `bundle install` will lock it, and `rackup` or `bundle exec rackup` will start the server. Remember that you will need to restart the server each time you change your files. Remember to appropriately `require` sinatra and pry, and `require_relative` your `app.rb` file.

## Completion

Complete at least parts 1 through 5.


## Part 1:

Start by preparing `app.rb` and getting the various routes (`/calc/.../.../...`) to work (no math necessary... just make sure that _Sinatra knows that ditty_ and that the params are coming through properly. Also make a `/calc` route that welcomes users to the calculator.

## Part 2:

Add the math calculations to each route so that the page shows the correct answer.

**Note**: Division can get a bit tricky... If things don't go according to plan, take a look at the differences between Ruby's Integer class and its Float class.

## Part 3:

Create a calculator class. Here's a possible outline for how the class may look (but feel free to do it your own way, if you'd like):
  * An instance of the Calculator class should have the following instance methods:
    * `.add(num_1, num_2)`
    * `.subtract(num_1, num_2)`
    * `.multiply(num_1, num_2)`
    * `.divide(num_1, num_2)`

## Part 4:

Refactor your app to use instances of the Calculator class to do the math, rather than hardcoding it in each route (as you did in step 2).

## Part 5:

Extract that Calculator class to a `calculator.rb` file, and add access the code in `app.rb` using `require_relative`.

## Bonuses

1. Make a route that redirects `'/'` to `'/calc'`.

2. Extend your app and your calculator class to also allow for roots and powers.

3. Style your calculator to look like a TI-89, or like a calculator from the future, or whatever you fancy.
