# ### Dealer
#
# - The dealer technically does all the same things that a player does
# so maybe he should inherit from Player?
# - The one thing that is different about the dealer are the rules which he must follow.
# A dealer can only stay if he has a certain hand value.

require_relative('card')
require_relative('hand')
require_relative('player')

class Dealer < Player
  def initialize(options = {})
    super(name: options[:name] || "Dealer")
  end

  def hit_17?
    get_hand_value > 17
  end

  def hit(add_card)
    super unless hit_17?
  end
end
