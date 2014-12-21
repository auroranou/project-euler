# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

# xxx * yyy = palindrome
# where xxx and yyy are both as large as possible

# is palindrome if palindrome = palindrome.reverse

# begin with 999 * 999(decrement this by 1)

array = []

(100..999).each do |x|
	(100..999).each do |y|
		array << (x * y).to_s
	end	
end

palindrome = (array.select { |s| s == s.reverse })

p = []
palindrome.each do |x|
	p << x.to_i
end

puts p.max