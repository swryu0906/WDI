require_relative 'animal'
require_relative 'client'
require_relative 'shelter'
require_relative 'seed'


class Main
  include Seed

  attr_accessor :shelter

  def initialize
    # @shelter = Shelter.new(name: "HappiTails")
    self.shelter = create_seed
  end

  def start
    display_title
    main_menu
  end

  def display_title
    print "" +
      "\n                 ██╗  ██╗ █████╗ ██████╗ ██████╗ ██╗    ████████╗ █████╗ ██╗██╗     ███████╗" +
      "\n                 ██║  ██║██╔══██╗██╔══██╗██╔══██╗██║    ╚══██╔══╝██╔══██╗██║██║     ██╔════╝" +
      "\n                 ███████║███████║██████╔╝██████╔╝██║       ██║   ███████║██║██║     ███████╗" +
      "\n                 ██╔══██║██╔══██║██╔═══╝ ██╔═══╝ ██║       ██║   ██╔══██║██║██║     ╚════██║" +
      "\n                 ██║  ██║██║  ██║██║     ██║     ██║       ██║   ██║  ██║██║███████╗███████║" +
      "\n                 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝     ╚═╝       ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝" +
      "\n                                                                              By Sungwon Ryu" +
      "\n\n"
  end

  def main_menu
    # display the main menu
    print "\nMain Menu\n" +
      "\n1. Create an animal" +
      "\n2. Create a client" +
      "\n3. Display all animals" +
      "\n4. Display all clients" +
      "\n5. Adopt an animal" +
      "\n6. Return an animal" +
      "\n7. Quit" +
      "\n" +
      "\nPlease choose one of the above menu : "
    user_response = gets.chomp

    menu = (1..7).collect(&:to_s)

    # check whether the user input is proper
    unless menu.include?(user_response)
      puts "\nError! You entered a wrong input!"
      print "Please choose one of the above menu : "
      user_response = gets.chomp
    end

    case user_response.to_i
    when 1
      create_animal
    when 2
      create_client
    when 3
      display_animals
    when 4
      display_clients
    when 5
      adopt_animal
    when 6
      return_animal
    end
  end

  # ask the given question and get the proper answer from a user
  def get_user_input(question, range = nil)
    print "\n#{question} : "
    user_response = gets.chomp

    if range === nil then
      # check whether the user input is empty
      while user_response.empty? do
        print "\nError! You entered a wrong input!" +
          "\n#{question} : "
        user_response = gets.chomp
      end
    else
      # check whether the user input is an integer and also it is within the given range
      unless user_response.to_i.is_a?(Integer) && user_response.to_i.between?(0, range - 1)
        print "\nError! You entered a wrong input!" +
          "\n#{question} : "
        user_response = gets.chomp
      end
    end

    user_response
  end

  def create_animal
    animal_name = get_user_input("What is the animal name?")
    animal_species = get_user_input("What is the animal species?")

    # push a newly created animal to the shelter's animals array
    self.shelter.animals << Animal.new(name: animal_name, species: animal_species)
    puts "Animal \"#{animal_name}\" was created."
    main_menu
  end

  def create_client
    client_name = get_user_input("What is the clent\'s name?")
    client_age = get_user_input("What is the client\'s age?")

    # push a newly created client to the shelter's clients array
    self.shelter.clients << Client.new(name: client_name, age: client_age)
    puts "Client \"#{client_name}\" was created."
    main_menu
  end

  def display_animals
    puts "\nAnimals in #{self.shelter.name} shelter\n"
    self.shelter.display_animals
    main_menu
  end

  def display_clients
    puts "\n#{self.shelter.name} shelter clients\n"
    self.shelter.display_clients
    main_menu
  end

  def adopt_animal
    puts "Animal Adoption"
    client_index = get_user_input("Which no. of client wants to adopt ?", self.shelter.clients.length).to_i
    animal_index = get_user_input("Which no. of animal does the client want to adopt ?", self.shelter.animals.length).to_i
    puts "Client #{self.shelter.clients[client_index].name} has adopted " +
      "#{self.shelter.animals[animal_index].species}, #{self.shelter.animals[animal_index].name}"
    self.shelter.adopt_animal(client_index, animal_index)
    main_menu
  end

  def return_animal
    puts "Animal Return"
    client_index = get_user_input("Which no. of client wnats to return the animal ?", self.shelter.clients.length).to_i
    client_pet_index = get_user_input("Which no. of pet does the client want to return ?", self.shelter.clients[client_index].pets.length).to_i
    puts "Client #{self.shelter.clients[client_index].name} has returned " +
      "#{self.shelter.clients[client_index].pets[client_pet_index].species}, #{self.shelter.clients[client_index].pets[client_pet_index]}"
    self.shelter.return_animal(client_index, client_pet_index)
    main_menu
  end
end


a1 = Animal.new(name: "Meo", species: "cat")
a2 = Animal.new(name: "Pooh", species: "bear")
a3 = Animal.new(name: "Lucky", species: "dog")
a3 = Animal.new(name: "Happy", species: "dog")
c1 = Client.new(name: "Sungwon", age: 34)
c2 = Client.new(name: "Anthony", age: 28)
c3 = Client.new(name: "Derek", age: 32)
c4 = Client.new(name: "Luis", age: 40)
s1 = Shelter.new(name: "Happitails")
s1.animals << a1
s1.animals << a2
s1.animals << a3
s1.clients << c1
s1.clients << c2
s1.clients << c3
s1.clients << c4
