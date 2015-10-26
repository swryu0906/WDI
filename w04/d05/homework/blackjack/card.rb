# ### Card
#
# - Should have a suit (heart, diamond, spade, club)
# - Should have a kind (Jack, 10, 7, Queen, etc...)
# - Should have a value (If the kind is Jack, the value should be 10)

class Card
  attr_reader(:suit, :kind, :value)

  def initialize(params)
    @suit = params[:suit]
    @kind = params[:kind]
    @value = params[:value]
  end

  # is_ace? function check whether self.kind is "Ace" or not
  def is_ace?
    self.kind == "Ace"
  end
end
