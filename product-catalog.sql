-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2025 at 12:02 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `product-catalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `category_entity`
--

CREATE TABLE `category_entity` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category_entity`
--

INSERT INTO `category_entity` (`id`, `name`) VALUES
(73, 'Rings'),
(74, 'Necklaces'),
(75, 'Earrings'),
(76, 'Anklets');

-- --------------------------------------------------------

--
-- Table structure for table `product_entity`
--

CREATE TABLE `product_entity` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imageurl` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `category_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_entity`
--

INSERT INTO `product_entity` (`id`, `description`, `imageurl`, `name`, `price`, `category_id`) VALUES
(127, 'Locket made of Silver', 'https://placehold.co/600x400', 'Silver locket', 299.99, 74),
(128, 'Ear cuff type earring, silver', 'https://placehold.co/600x400', 'Ear cuff Earrings', 99.99, 75),
(129, 'Golden anklet footwear', 'https://placehold.co/600x400', 'Gold anklet', 199.99, 76),
(130, 'Diamond Ring Solitaire', 'https://placehold.co/600x400', 'Diamond Ring', 1599.99, 73),
(131, 'Necklace with charm or pendant', 'https://placehold.co/600x400', 'Pendant', 699.99, 74),
(132, 'Chain made of gold', 'https://placehold.co/600x400', 'Gold chain', 399.99, 74),
(133, 'Promise ring for engagements', 'https://placehold.co/600x400', 'Promise Ring', 499.99, 73);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category_entity`
--
ALTER TABLE `category_entity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_entity`
--
ALTER TABLE `product_entity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK8kxxmqdokh3lthvw0t148w0bc` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category_entity`
--
ALTER TABLE `category_entity`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `product_entity`
--
ALTER TABLE `product_entity`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_entity`
--
ALTER TABLE `product_entity`
  ADD CONSTRAINT `FK8kxxmqdokh3lthvw0t148w0bc` FOREIGN KEY (`category_id`) REFERENCES `category_entity` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
