-- n! means n × (n − 1) × ... × 3 × 2 × 1

-- For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
-- and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

-- Find the sum of the digits in the number 100!
--------------------------------------------------------------------------------

-- Borrow our friend from problem 4
intToList :: Show a => a -> [Int]
intToList = map (\x -> read [x] :: Int) . (show)

ans :: Int
ans = sum $ intToList $ product [1..100]