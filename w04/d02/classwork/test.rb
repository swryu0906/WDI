def hello_world1
	puts "Hello world!"
end

def hello_world2(name)
	puts "Hello #{name}"
end

def test1(name = "world")
	puts "Hello #{name}"
end

def test2(name = nil)
	if(name === nil)
		puts "Hello world"
	else
		puts "Hello #{name}"
	end
end

def say_hi(options) 
	puts "Hi #{options[:name]}, #{options[:message]}"
end

def greet(greeting:, name:)
	p "#{greeting} #{name}"
end


# not recommended
def hello arg1, arg2
	puts "#{arg1} #{arg2}"
end

def add(arg1=nil, arg2=nil)
	@arg1 ||= arg1
	@arg2 ||= arg2	
	puts @arg1 + @arg2
end
