# ### Client:
#
# - A client should have a name.
# - A client should have an age.
# - A client can have multiple pets (animals), but it doesn't start with any.

class Client
  attr_accessor(:name, :age, :pets)
  def initialize(params)
    @name = params[:name]
    @age = params[:age]
    @pets = []
  end
end
