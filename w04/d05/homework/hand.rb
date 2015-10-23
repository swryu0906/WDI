# ### Hand
#
# - A hand can hold cards but does not start with any
# - A hand should be able to add a card to itself
# - A hand should be able to get the hand value of checking all of its card's values

class Hand
  attr_accessor(:cards, :hand_value)
  def initialize(params)
    @cards = []
    @hand_value = 0
  end

  def add_card(card)
    @cards << card
    @hand_value += card.value
  end
end
