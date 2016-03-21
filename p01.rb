# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

i = 0
fizzbuzz = []

while i < 1000
	if i % 5 == 0 || i % 3 == 0
		fizzbuzz << i
	end
	i += 1
end

puts fizzbuzz.inject(:+)