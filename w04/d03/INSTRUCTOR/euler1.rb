$GLOBAL_VARIABLE = "this is a global variable ... NEVER DO THIS"

def fizzbuzzer_mults_end(last)
   num = 0
   mults_sum = 0
   until num === last
      if (num % 3 == 0) || (num % 5 == 0)
         mults_sum += num
      end
   num += 1
   end
   puts mults_sum
end

def multiples(num_limit)
	x = []
	(1...num_limit).each do |num|
		if num % 3 == 0 || num % 5 == 0
			x.push(num)
		end
	end
	x.reduce(:+)
end

def multiples(num_limit)
	x = (1...num_limit).map do |num|
		if num % 3 == 0 || num % 5 == 0
			num
		end
	end
	x.reduce(:+)
end
