module MyModule
  def talk
    puts "I am a human"
  end

  def breathe
    puts "normally"
  end
end





# class What
#   def breathe
#     puts "oh yeahhhh"
#   end
# end
#
#
# class Animal < What
#   attr_accessor :life
#   def initialize
#     @life = true
#   end
#
#   def breathe
#     puts "breathing"
#   end
#   def eat
#     puts "eating"
#   end
# end
#
#
# class Dog < Animal
#   def bark
#     puts "barking"
#     super   # it will cause NoMthodError
#   end
# end
#
# class Cat < Animal
#   def breathe
#     puts "panting"
#     super("slowly")
#     super
#   end
# end
#
#
# class Human < Animal
#   include MyModule
# end



class Person
  extend MyModule

  def self.define_yourself
    puts "I am a person object #{self}"
  end
end


module AnotherModule
  class MyClass
    def self.where_am_i
      puts self
    end
  end
end
