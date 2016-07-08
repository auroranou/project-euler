-- The prime 41, can be written as the sum of six consecutive primes:
-- 41 = 2 + 3 + 5 + 7 + 11 + 13
-- This is the longest sum of consecutive primes that adds to a prime below one-hundred.

-- The longest sum of consecutive primes below one-thousand that adds to a prime,
-- contains 21 terms, and is equal to 953.
-- Which prime, below one-million, can be written as the sum of the most consecutive primes?

--------------------------------------------------------------------------------

primes :: [Integer]
primes = 2 : 3 : 5 : filter (isPrime primes) [7..1000000]

isPrime :: Integral a => [a] -> a -> Bool
isPrime (p:ps) n
  | p^2 > n        = True  -- We've checked up to the square root of n and there are no factors
  | n `mod` p == 0 = False -- There are factors
  | otherwise      = isPrime ps n -- Keep going down the list until we return true or false
  
-- Get the longest chunk of primes where the sum is also prime
