class WelcomeController < ApplicationController

  def index
    @hello = "hello world"
  end

  def awesome
    @awesome = 'AWESOMEEEE'
  end

end
