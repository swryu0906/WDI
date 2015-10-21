# Warmup

def lengths(words)
  words.map do |word|
    word.length
  end
end



# Round 1

def fizzbuzzer(num)
  remainder_by_3 = num.remainder(3)
  remainder_by_5 = num.remainder(5)
  if remainder_by_3 === 0 && remainder_by_5 === 0
    return "FizzBuzz"
  elsif remainder_by_3 === 0
    return "Fizz"
  elsif remainder_by_5 === 0
    return "Buzz"
  else
    return "Sorrels"
  end
end



# Round 2

def hasher(array)
  new_hash = Hash.new
  array.each do | sub_array |
    if sub_array.length === 2
      new_hash[sub_array[0]] = sub_array[1]
    elsif sub_arry.length === 1
      new_hash[sub_array[0]] = nil
    end
  end

  new_hash
end


# Round 3

def hash_switcher(arg)
  if arg.class == Hash
    arg.invert
  elsif arg.class == Array
    arg.collect do |hash|
      hash.invert
    end
  end
end


# Round 4

def export_hash(array1, array2)
  if (array1.class != Array) || (array2.class != Array)
    nil
  elsif array1.length != array2.length
    "Your input is bad and you shoud feel bad"
  else
    new_hash = Hash.new
    array1.each_index do |index|
      new_hash[array1[index]] = array2[index]
    end
    new_hash
  end
end


# Round 5

def word_reverse(str)
  temp_array = str.split(' ')
  temp_array.reverse!
  temp_array.join(' ')
end


# Round 6

def letter_reverse(str)
  temp_array = str.split(' ')
  temp_array.collect! do |sub_str|
    sub_str.reverse!
  end
  temp_array.join(' ')
end


# Round 7

def maximus(array)
  longest = ""
  array.each do |str|
    longest = str if str.length > longst.length
  end
  longest
end
