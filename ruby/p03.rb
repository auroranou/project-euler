# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143?

require 'prime'

Prime.each(600_851_475_143) do |prime|	
	if 600_851_475_143 % prime == 0
		puts prime
	end
end
