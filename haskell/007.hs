-- By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
-- What is the 10,001st prime number?

--------------------------------------------------------------------------------

-- Maintain an infinite list of primes
primes :: [Integer]
primes = 2 : 3 : 5 : filter (isPrime primes) [7..]

isPrime :: Integral a => [a] -> a -> Bool
isPrime (p:ps) n
  | p^2 > n        = True  -- We've checked up to the square root of n and there are no factors
  | n `mod` p == 0 = False -- There are factors
  | otherwise      = isPrime ps n -- Keep going down the list until we return true or false

  -- The 10,001st prime number lives at index 10,000
ans :: Integer
ans = primes !! 10000