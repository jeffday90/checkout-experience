DROP DATABASE IF EXISTS checkout_experience;
CREATE DATABASE checkout_experience;
USE checkout_experience;

CREATE TABLE `checkout` (
  `id` INTEGER AUTO_INCREMENT UNIQUE,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(10) NOT NULL,
  `line 1 address` VARCHAR(255) NOT NULL,
  `line 2 address` VARCHAR(255) NOT NULL,
  `city address` VARCHAR(255) NOT NULL,
  `state address` VARCHAR(255) NOT NULL,
  `ZIP` INTEGER NOT NULL, 
  `CREDIT card` BIGINT NOT NULL,
  `expiration data` INTEGER,
  `CVV` INTEGER NOT NULL,
  `BILLING ZIP` INTEGER NOT NULL
)
