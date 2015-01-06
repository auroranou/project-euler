# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

require 'prime'

primes = []
exponents = []

(2..20).each do |n|
	primes << n.prime_division
end

pairs = primes.flatten(1).uniq

groups = pairs.group_by { |pair| pair[0] }

groups.each do |group|
	exponents << group[1].max_by { |pair| pair[1] }
end

exponents.map! { |group | group[0] ** group[1]}

p exponents.inject(:*)

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
