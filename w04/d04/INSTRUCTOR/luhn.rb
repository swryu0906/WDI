def valid_card?(cardnumber)
	card = cardnumber.to_s.split("").map(&:to_i).reverse
	card.each_index { |index| card[index] *= 2 if index.odd? }
	sum = card.join("").split("").map(&:to_i).reduce(:+)
	return sum % 10 == 0
end

puts valid_card?(1234567890123456) #should be false
puts valid_card?(4408041234567893) #should be true
puts valid_card?(38520000023237) #should be true
puts valid_card?(4222222222222) #should be true

# ALEX's SOLUTION
# def valid_card?(number)
#   first = number.to_s.split('')
#   second = first.map { |digit| digit.to_i }
#   third = second.map.with_index{|v,i| i % 2 == 0 ? v : v * 2 }
#   fourth = third.join.chars.map(&:to_i)
#   fifth = fourth.inject{|sum,x| sum + x }%10
#   if fifth == 0
#     puts true
#   else
#     puts false
#   end
# end
