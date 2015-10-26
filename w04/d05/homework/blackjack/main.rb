# ## The APP
#
# - You should have each class in its own seperate file
# - Load all your classes into your `main.rb` file using `require_relative`
# - Your main game loop should exist in the `main.rb` file
# - Needs to be playable through console

require_relative('card')
require_relative('hand')
require_relative('deck')
require_relative('player')
require_relative('dealer')
require_relative('game')

def display_title
  print "" +
    "\n                ██████╗ ██╗      █████╗  ██████╗██╗  ██╗         ██╗ █████╗  ██████╗██╗  ██╗" +
    "\n                ██╔══██╗██║     ██╔══██╗██╔════╝██║ ██╔╝         ██║██╔══██╗██╔════╝██║ ██╔╝" +
    "\n                ██████╔╝██║     ███████║██║     █████╔╝          ██║███████║██║     █████╔╝ " +
    "\n                ██╔══██╗██║     ██╔══██║██║     ██╔═██╗     ██   ██║██╔══██║██║     ██╔═██╗ " +
    "\n                ██████╔╝███████╗██║  ██║╚██████╗██║  ██╗    ╚█████╔╝██║  ██║╚██████╗██║  ██╗" +
    "\n                ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝     ╚════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝" +
    "\n" +
    "\n                                                                              By Sungwon Ryu" +
    "\n\n"
end


game = Game.new
display_title
game.reset_game
