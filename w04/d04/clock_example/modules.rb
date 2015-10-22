#
# class Animal
#   attr_accessor :life
#   def initialize
#     @life = true
#   end
#
#   def breathe(how)
      self.life = false
#     puts "breathing #{how}"
#   end
#
#   def eat
#     puts "Eating"
#   end
# end
a = Animal.new
a.life = "Still alive"
#
module MyModule
  def talk
    puts "i am human"
  end
  def breathe
    puts "normally"
    super
  end
end
#
# class Human < Animal
#   include MyModule
#   def initialize(name)
#     @name = name
#   end
# end
#
#
#
#
#
# # class Dog < Animal
# #   def breathe
# #     puts "panting"
# #     super("hard")
# #   end
# #
# #   def bark
# #     puts "Barking"
# #     super
# #   end
# # end
#
# class Cat  < Animal
# end

class Person
  # extend MyModule
  def initialize(name)
    @name = name
  end

  def change_name(new_name)
    self.name = new_name
  end

  # protected just use private

  private

  attr_accessor :name
end
  # class methods!!!
  # def self.how_many
  #   @@count
  # end
  # def self.define_yourself
  #   puts "i am a Person object #{self}"
  # end

# end
module MyApp::V1
  class MyClass
    def self.where_am_i
      puts self
    end
  end
end
