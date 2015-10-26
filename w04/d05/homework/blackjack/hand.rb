# ### Hand
#
# - A hand can hold cards but does not start with any
# - A hand should be able to add a card to itself
# - A hand should be able to get the hand value of checking all of its card's values

class Hand
  private
  attr_accessor(:cards)

  def initialize
    @cards = []
    # @hand_value = 0
  end

  public
  def add_card(card)
    cards << card
    # @hand_value += card.value
  end

  # get_hand_value function returns the sume of card.value in self.cards array
  def get_hand_value
    cards.reduce(0) { |hand_value, card| hand_value += card.value }
  end

end
