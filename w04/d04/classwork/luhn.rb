# class Luhn_algorithm
#   @card_num = ""
#   @card_num_array = []
#
#   def initialize
#   end
#
#   def valid_card(card_num)
#     @card_num = card_num
#     @card_num_array = @card_num.split(//)
#     @card_num_array.collect { |digit| digit.to_i }
#     index = 0
#     sum = 0
#     @card_num_array.reverse!
#     @card_num_array.collect { |digit|
#       digit *= 2 if index.odd?
#     }
#     @card_num_array.each { |digit| sum += digit }
#
#     if sum % 10 === 0
#       true
#     else
#       false
#     end
#   end
# end


# valid() method takes either Fixnum or String
# return true or false based on the Luhn Algorithm
def valid?(card_num)
  # convert card_num to String and split and reverse and change each digit to Integer
  card = card_num.to_s.split(//).reverse.map(&:to_i)
  # multiply digits with odd index in reversed digits by 2
  card.each_index { |index| card[index] *= 2 if index.odd? }
  # combine all digits by using reduce(:+) to get sum
  sum = card.map(&:to_i).reduce(:+)
  # return true or false whether sum is divisible by 10
  sum % 10 === 0
end


puts valid?(1234567890123456) #should be false
puts valid?(4408041234567893) #should be true
puts valid?(38520000023237) #should be true
puts valid?(4222222222222) #should be true


# def valid_card?(cardnumber)
# 	card = cardnumber.to_s.split("").map(&:to_i).reverse
# 	card.each_index { |index| card[index] *= 2 if index.odd? }
# 	sum = card.join("").split("").map(&:to_i).reduce(:+)
# 	return sum % 10 == 0
# end
