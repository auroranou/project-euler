-- The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

-- Find the sum of all the primes below two million.
--------------------------------------------------------------------------------

-- Maintain an infinite list of primes
primes :: [Integer]
primes = 2 : 3 : 5 : filter (isPrime primes) [7..]

isPrime :: Integral a => [a] -> a -> Bool
isPrime (p:ps) n
  | p^2 > n        = True  -- We've checked up to the square root of n and there are no factors
  | n `mod` p == 0 = False -- There are factors
  | otherwise      = isPrime ps n -- Keep going down the list until we return true or false

ans :: Integer
ans = sum(takeWhile (< 2000000) primes)
