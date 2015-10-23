# ### Animal:
#
# - An animal should have a name.
# - An animal should have a species.
# - An animal can have multiple toys, but doesn't start with any.

class Animal
  attr_accessor(:name, :species, :toys)
  def initialize(params)
    self.name = params[:name]
    self.species = params[:species]
    self.toys = []
  end
end
