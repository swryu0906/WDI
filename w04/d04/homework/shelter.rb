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
    self.name = params[:name]
    self.animals = []
    self.clients = []
  end

  def display_clients
    if self.clients.empty?
      puts "There is no client."
    else
      self.clients.each_index do |index|
        puts "#{index.to_s}. name : #{self.clients[index].name}, age : #{self.clients[index].age}"
      end
    end
  end

  def display_animals
    if self.animals.empty?
      puts "There is no animal."
    else
      self.animals.each_index do |index|
        puts "#{index.to_s}. name : #{self.animals[index].name}, species : #{self.animals[index].species}"
      end
    end
  end

  def adopt_animal(client_index, animal_index)
    self.clients[client_index].pets << self.animals.delete_at(animal_index)
  end

  def return_animal(client_index, client_pet_index)
    self.animals << self.clients[client_index].pets[client_pet_index]
  end
end
