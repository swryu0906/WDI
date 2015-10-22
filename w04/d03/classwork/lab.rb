# Pilot Class
#
# Attributes
#
# @name` - A string, the name of the pilot
# @age` - A number, the age of the pilot
# @callsign` - A string, the nickname of the pilot
# @badasspoints` - A number, should be set to 0 by default

class Pilot

  # initialize(name, age, callsign)
  # Should take the arguments and set them to the instance methods
  # badasspoints should be set to 0
  def initialize(name, age, callsign)
    @name = name
    @age = age
    @callsign = callsign
    @badasspoints = 0
  end

  # info
  # Should return a string saying "My name is WHATEVER, I am WHATEVER years old, and my callsign is WHATEVER"
  def info
    return "My name is #{@name}, I am #{@age} years old, and my callsign is #{@callsign}."
  end

  # train
  # Should increase the badasspoints by 1
  # The pilot class should have getter and setter methods for all its attributes
  def train
    @badasspoints += 1
  end

  attr_accessor :name, :age, :callsign, :badasspoints
end


# Ship Class
#
# Attributes
#
# @name - A string, the name of the ship
# @ship_type - A string, the type of ship (destroyer, tie-fighter, x-wing, carrier, etc...)
# @pilot_limit - A number, the limit of pilots the ship can have
# @pilot_list - An array of pilot objects, starts out empty

class Ship

  # initialize(name, ship_type, pilot_limit)
  # Should take the arguments and set them to the instance methods
  # Should create an instance method @pilot_list and set it to an empty array. It will hold your Pilot objects.
  def initialize(name, ship_type, pilot_limit)
    @name = name
    @ship_type = ship_type
    @pilot_limit = pilot_limit
    @pilot_list = []
  end

  # assign_pilot(name, age, callsign)
  # Should create a new Pilot object with the arguments.
  # Check to see if the ammount of pilots is less than the pilot limit. If theres less pilots than the pilot limit, push the created Pilot object into @pilot_list
  def pilot(name, age, callsign)
    @pilot_list.push(Pilot.new(name, age, callsign)) if pilot_list.length < pilot_limit
  end

  # pilot_info
  # Should loop through the array of pilots and display the info of each pilot
  def pilot_info
    @pilot_list.each do |pilot|
      puts pilot.info
    end
  end

  # most_badass
  # Should loop through the list of pilots, find the one with the most badasspoints, and return a string that says ... "WHOEVER is the most badass pilot"
  def most_badass
    badass = pilot_list[0]
    @pilot_list.each do |pilot|
      badass = pilot if badass.badasspoints < pilot
    end
    "#{badass.name} is the most badass pilot."
  end


  # walk_the_plank(name)
  # Should remove the pilot with the name that matches the argument
  def walk_the_plank(name)
    @pilot_list

  # battle_against_ship(ship_object)
  # Should accept one arguemnt, which should be an already instantiated Ship object
  # You want to loop through both ships and see which ship has pilots with more badasspoints
  # The ship with the most badasspoints is the winner
  # The Ship class should have getter and setter methods for all its attributes




a_pilot = Pilot.new("David", 30, "wild cat")
b_pilot = Pilot.new("Steve", 30, "wise ass")
c_pilot = Pilot.new("Anthony", 25, "smart ass")


puts a_pilot.info
puts b_pilot.info
puts c_pilot.info

a_pilot.train
a_pilot.name = "Luis"
puts a_pilot.info
