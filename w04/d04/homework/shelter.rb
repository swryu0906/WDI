# ### Shelter:
#
# - A shelter should have a name
# - A shelter can have multiple animals, but it doesn't start with any.
# - A shelter can have multiple clients, but it doesn't start with any.
# - A shelter should be able to display all of its clients.
# - A shelter should be able to display all of its animals.
# - A shelter should be able to facilitate an adoption
# (one of its clients adopting one of the animals from shelter)
# - A shelter should be able to facilitate a return
# (one of its clients returning his/her pet to the shelter)

class Shelter
  attr_accessor(:name, :animals, :clients)
  def initialize(params)
    @name = params[:name]
    @animals = []
    @clients = []
  end

  def display_clients
    self.clients.each_index do |index|
      puts "#{index.to_s.rjust(2, "0")}. name : #{self.clients[index].name}, age : #{self.clients[index].age}"
    end
  end

  def display_animals
    self.animals.each_index do |index|
      puts "#{index.to_s.rjust(2, "0")}. name : #{self.animals[index].name}, species : #{self.animals[index].species}"
    end
  end

  def adopt(client_index, animal_index)
    self.clients[client_index].pets << self.animals.delete_at(animal_index)
  end

  def return(client_index, client_pet_index)
    self.animals << self.clients[client_index].pets[client_pet_index]
  end
end
