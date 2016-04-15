-- 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
-- What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

-- Find the greatest common denominator by recursing over remainders
greatestCommonDiv :: Integral a => a -> a -> a
greatestCommonDiv a b
  | a == 0    = b
  | b == 0    = a
  | otherwise = greatestCommonDiv b (a `mod` b)

-- Find least common multiple by reducing with greatest common denominator
leastCommonMult :: Integral a => a -> a -> a
leastCommonMult a b = (a * b) `div` (greatestCommonDiv a b)

ans :: Int
-- foldl1 doesn't require a starting value argument; foldl1 does
ans = foldl1 leastCommonMult [1..20]
