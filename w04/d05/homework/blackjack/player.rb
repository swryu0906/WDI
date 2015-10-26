# ### Player
#
# - Should have a hand
# - Should be able to hit
# - Should be able to stay
# - Should be able to tell if his hand is a bust
# - Should be able to tell if his hand is a win

require_relative('card')
require_relative('hand')

class Player
  private

  attr_accessor(:hand)

  def initialize
    @hand = Hand.new
  end

  public

  def hit(card)
    hand.add_card(card)
  end

  def stay
  end

  def is_bust?
    hand.get_hand_value > 21
  end

  def get_hand_value
    return hand.get_hand_value
  end

  # is_win() method check whether the play wins or not
  # If the player's hand value wins, it will return 1
  # If the player's hand value ties, it will return 0
  # If the player's hand value loses, it will return -1
  def is_win(other_player)
    if is_bust? && other_player.is_bust?
      0
    elsif is_bust? && !other_player.is_bust?
      -1
    elsif !is_bust? && other_player.is_bust?
      1
    else
      if hand.get_hand_value == other_player.get_hand_value
        0
      elsif hand.get_hand_value < other_player.get_hand_value
        -1
      else
        1
      end
    end
  end
end
