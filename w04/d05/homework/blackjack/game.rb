# ### Game
#
# - Should have a Deck
# - Should have a Player
# - Should have a Dealer
# - Put in here what you think the game should have.
# Maybe you want methods that print out some messages?
# Maybe a win method that prints out a winning message?
# Or a bust method that prints out a losing message?

class Game
  private

  attr_accessor(:deck, :player, :dealer)

  def initialize
    @deck = Deck.new
    @player = Player.new
    @dealer = Dealer.new
  end

  public
  def reset_game
    deck.reset_cards

    play_hit(player)
    play_hit(player)
    play_hit(dealer)
    play_hit(dealer, true)

    begin
      user_input = get_user_input("Do you want to hit(h/H) or stand(s/S)", ["h", "s"])
      play_hit(player)
    end while user_input != "s" && !player.is_bust?

    # When the player's hand_value exceeds 21
    if !player.is_bust?
      while !dealer.hit_17? && !dealer.is_bust? do
        play_hit(dealer)
      end
    end

    case player.is_win(dealer)
    when 1
      puts "#{player.name} wins!"
    when 0
      puts "#{player.name} and #{dealer.name} are tie."
    else
      puts "#{dealer.name} wins"
    end
  end

  def play_hit(player, hide = false)
    new_card = deck.pick_card
    player.hit(new_card)
    puts "#{player.name} : " + (hide ? " hidden" : " #{new_card.unicode} #{new_card.kind}, hand_value : #{player.hand.get_hand_value}")
  end

  def get_user_input(question, valid_answers)
    print "#{question} : "
    user_input = gets.chomp.downcase
    while !valid_answers.include?(user_input) do
      puts "Error! Your input is not correct."
      print "#{question} : "
      user_input = gets.chomp.downcase
    end
  end
end
