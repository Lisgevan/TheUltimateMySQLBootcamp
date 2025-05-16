-- Exercise 01
SELECT DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date FROM users ORDER BY created_at LIMIT 1; -- mine
SELECT DATE_FORMAT(MIN(created_at), '%M %D %Y') AS earliest_date FROM users;

-- Exercise 02
SELECT * from users  ORDER BY created_at LIMIT 1; -- mine
SELECT * FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);

-- Exercise 03
SELECT 
  MONTHNAME(created_at) AS month, 
  COUNT(*) AS count 
FROM users 
GROUP BY month 
ORDER BY count DESC; -- mine

-- Exercise 04
SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE ('%@yahoo%');

-- Exercise 05
SELECT
  CASE
    WHEN email LIKE ('%@yahoo%') THEN 'yahoo'
    WHEN email LIKE ('%@gmail%') THEN 'gmail'
    WHEN email LIKE ('%@hotmail%') THEN 'hotmail'
    ELSE 'other'
  END AS provider,
  COUNT(*) AS total_users FROM users
GROUP BY provider
ORDER BY total_users; -- mine
