# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

# a^2 + b^2 = c^2
# For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.

# given a^2 + b^2 = c^2 and a + b + c = 1000: 
	# a = m^2 - n^2
	# b = 2mn
	# c = m^2 + n^2

# find all unique factor pairs for given integer b
def find_factors(b)
	factors = []
	1.upto(Math.sqrt(b)) do |n|
		factors << [n, b/n] if b % n == 0
	end
end

def pythagorean(b)
# if b is EVEN, b = 2mn so b/2 = mn
	if b.even?
	# find all factor pairs of b/2
		find_factors(b/2)
# if b is ODD, b = mn
	else
	# find all factor pairs of b
	# a and c must be divided by 2
	end
end


find_factors(24)

# check if a + b + c = 1000