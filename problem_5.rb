# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

require 'prime'

# array = []

# Prime.each(20) do |prime|
# 	array << prime
# end 

# array.inject(:*)

array = (1..20).to_a
primes = []

array.each do |x|
	primes << x.prime_division
end

unique = []
unique = primes.flatten.each{ |x, y| x[y] }
unique = unique.uniq

puts (unique.inject(:*)
