# ### Deck
#
# - Should be able to construct a proper deck of 52 Card objects
# - Should be able to shuffle itself
# - Should be able to remove a random card
# - Should be able to reset itself

require_relative('card')
require_relative('hand')

class Deck
  private

  attr_accessor(:cards, :picked_cards)

  def initialize
    @cards = construct_cards
    @picked_cards = []
  end

  def construct_cards
    new_cards = []
    suits = ["heart", "diamond", "spade", "club"]
    kind_value_pairs = { "Jack": 10, "Queen": 10, "King": 10, "Ace": 11 }

    # iterate each suit
    suits.each do |suit|
      # iterate from 2 to 10
      (2..10).each { |num| new_cards << Card.new(suit: suit, kind: num.to_s, value: num) }
      # iterate from Jack to Ace
      kind_value_pairs.each { |kind, value| new_cards << Card.new(suit: suit, kind: kind, value: value) }
    end
    new_cards
  end

  public

  def display_cards
    cards.each do |card|
      puts "suit: #{card.suit}, kind: #{card.kind}, value: #{card.value}"
    end
  end

  def shuffle_cards
    # self.cards.sort_by { rand }
    cards.shuffle!
  end

  def pick_card
    picked_card = cards.pop
    picked_cards << picked_card
    picked_card
  end

  def reset_cards
    cards.concat(picked_cards)
    shuffle_cards
    # self.cards = construct_cards
  end
end
