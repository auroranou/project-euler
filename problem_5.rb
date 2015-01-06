# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

require 'prime'

primes = []
exponents = []

(1..20).each do |n|
	primes << { num: n, primes: n.prime_division }
end

primes.each do |prime|
	prime[:primes].each do |k, v|
		exponents << k ** v
	end
end

exponents = exponents.uniq!
p exponents.inject(:*) / 2


# check_nums = (2..20).to_a
# num = 2520

# while true do 
# 	puts "checking #{num}" if num % 1_000_000 == 0
# 	check_nums.each do |n|
# 		if num % n == 0
# 			if n == check_nums[-1]
# 				puts num
# 				exit
# 			else
# 				next
# 			end
# 		else
# 			num += 1
# 			break
# 		end
# 	end
# end
