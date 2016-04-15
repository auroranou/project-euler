-- A palindromic number reads the same both ways.
-- The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
-- Find the largest palindrome made from the product of two 3-digit numbers.
--------------------------------------------------------------------------------

-- Convert numbers to a list of integers
intToList :: Show a => a -> [Int]
intToList = map (\x -> read [x] :: Int) . (show)

-- Check that a list is the same sequence when reversed
isPalindrome :: Eq a => [a] -> Bool
-- isPalindrome list = list == reverse list
isPalindrome = (<*>) (==) reverse

ans = maximum [ x | a <- [100..999], b <- [100..999], let x = a * b, isPalindrome $ intToList x ]