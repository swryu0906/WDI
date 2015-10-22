require_relative 'animal'
require_relative 'client'
require_relative 'shelter'

# shelter = Shelter.New


class Main
  attr_accessor :shelter

  def initialize
    @shelter = Shelter.new(name: "HappiTails")
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
    print "\n1. Create an animal" +
      "\n2. Create a client" +
      "\n3. Display all animals" +
      "\n4. Display all clients" +
      "\n5. Quit" +
      "\n" +
      "\nPlease choose one of the above menu : "
    user_response = gets.chomp

    menu = (1..5).collect(&:to_s)

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
    end
  end

  # ask the given question and get the proper answer from a user
  def get_user_input(question)
    print "\n#{question} : "
    user_response = gets.chomp

    # check whether the user input is empty
    while user_response.empty? do
      print "\nError! You entered a wrong input!" +
        "\n#{question} : "
      user_response = gets.chomp
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
    puts "\n#{self.shelter.name}\'s animals"
    self.shelter.display_animals
    main_menu
  end

  def display_clients
    puts "\n#{self.shelter.name}\' clients"
    self.shelter.display_clients
    main_menu
  end
end





a1 = Animal.new(name: "Meo", species: "cat")
a2 = Animal.new(name: "Poo", species: "bear")
c1 = Client.new(name: "Sungwon", age: 34)
c2 = Client.new(name: "Anthony", age: 28)
s1 = Shelter.new(name: "Happitails")
s1.animals << a1
s1.animals << a2
s1.clients << c1
s1.clients << c2
