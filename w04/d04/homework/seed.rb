module Seed
  def create_seed()
    @s1 = Shelter.new(name: "Happitails")

    @a1 = Animal.new(name: "Meo", species: "cat")
    @a2 = Animal.new(name: "Pooh", species: "bear")
    @a3 = Animal.new(name: "Lucky", species: "dog")
    @a4 = Animal.new(name: "Happy", species: "dog")

    @c1 = Client.new(name: "Sungwon", age: 34)
    @c2 = Client.new(name: "Anthony", age: 28)
    @c3 = Client.new(name: "Derek", age: 32)
    @c4 = Client.new(name: "Luis", age: 40)

    @s1.animals << @a1
    @s1.animals << @a2
    @s1.animals << @a3
    @s1.animals << @a4
    @s1.clients << @c1
    @s1.clients << @c2
    @s1.clients << @c3
    @s1.clients << @c4

    @s1
  end
end
