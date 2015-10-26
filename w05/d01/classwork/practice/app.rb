class Practice < Sinatra::Base

  get '/' do
    @topics = ["HTML", "CSS", "Javascript", "JQuery", "Ruby", "Sinatra", "Ruby on Rails"]
    erb :home
  end

  get '/html' do
    @html_problems = [
      "Writing HTML in a SCRIPT element",
      "Ampersands (&\'s) in URLs",
      "Incorrect nesting of elements",
      "Using a NAME attribute with IMG or FORM",
      "Using all lowercase letters in a DOCTYPE",
      "Missing a required sub-element of HEAD",
      "Uppercase letters in XHTML tags"
    ]
    erb :html
  end

  get '/css' do
    "CSS is sucks!"
    erb :css
  end

  get '/javascript' do
    "Javascript is more sucks!!"
    erb :Javascript
  end

  get '/jquery' do
    "Jaquery is more more sucks!!!"
    erb :jquery
  end

  get '/ruby' do
    "Ruby is really sucks!!!!"
    erb :ruby
  end

  get '/sinatra' do
    "Sinatra is really really sucks!!!!!"
    erb :sinatra
  end

end
