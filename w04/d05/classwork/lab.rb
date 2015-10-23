class PersonPri
  initialize(name)
    @name = name
  end

  def change_name(new_name)
    name = new_name
  end

  def display_name
    puts name
  end

  private
  attr_accessor :name

end


class Person
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def change_name(name)
    self.name = name
  end

  def display_name
    puts self.name
  end
  
end
