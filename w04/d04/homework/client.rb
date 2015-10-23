# ### Client:
#
# - A client should have a name.
# - A client should have an age.
# - A client can have multiple pets (animals), but it doesn't start with any.

class Client
  attr_accessor(:name, :age, :pets)
  def initialize(params)
    self.name = params[:name]
    self.age = params[:age]
    self.pets = []
  end

  def display_pets
    if self.pets.empty?
      puts "There is no pet."
    else
      self.pets.each_index do |index|
        puts "#{index.to_s}. name : #{pets[index].name}, species : #{pets[index].species}"
      end
    end
  end
end
