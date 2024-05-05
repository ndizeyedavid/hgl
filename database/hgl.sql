-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 08:44 PM
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
-- Database: `hgl`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `blog_id` varchar(111) NOT NULL,
  `blog_title` varchar(111) NOT NULL,
  `blog_image` varchar(111) NOT NULL,
  `blog_content` text NOT NULL,
  `tags` text NOT NULL,
  `views` int(11) NOT NULL,
  `poster` varchar(111) NOT NULL,
  `posted_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `blog_id`, `blog_title`, `blog_image`, `blog_content`, `tags`, `views`, `poster`, `posted_date`) VALUES
(9, '953951286', 'Joined forces with Albert Einstein.', '953951286.jpg', '<p>The project \"JetStream Development\" aims to revolutionize aviation fueling operations in Rwanda through</p><p>the strategic installation of aviation fuel depots. The primary objective is to enhance fueling flexibility,</p><p>operational efficiency, and safety standards while adhering to regulatory compliance and environmental</p><p>sustainability principles.</p><p>Rwanda\'s aviation sector is experiencing significant growth, necessitating the development of robust fueling</p><p>infrastructure to meet increasing demand. This project addresses the critical need for modernized fueling</p><p>facilities that align with international standards and best practices.</p><p>Key components of the project include the selection of optimal fuel depot locations, careful planning and</p><p>design of fuel storage facilities, and implementation of rigorous safety protocols. By incorporating both</p><p>above-ground and underground storage solutions, the project ensures versatility and resilience in fueling</p><p>operations.</p><p>Strategic collaboration with regulatory authorities, community stakeholders, and aviation industry experts is</p><p>paramount to the project\'s success. Through proactive engagement and adherence to regulatory requirements,</p><p>the project aims to set new benchmarks for aviation fueling infrastructure in Rwanda.</p><p>The project\'s economic analysis demonstrates favorable returns on investment, coupled with positive socio-</p><p>economic impacts on local communities. Furthermore, comprehensive environmental impact assessments and</p><p>mitigation measures underscore the project\'s commitment to environmental stewardship.</p><p>In conclusion, the \"JetStream Development\" project represents a transformative endeavor poised to elevate</p><p>Rwanda\'s aviation sector to new heights. With its emphasis on innovation, safety, sustainability, and</p><p>community engagement, the project lays the foundation for a more resilient and prosperous aviation industry</p><p>in Rwanda.</p>', '#knowledge #donating #help #love #education', 2, 'admin', '2024-05-05 18:42:25');

-- --------------------------------------------------------

--
-- Table structure for table `blog_comments`
--

CREATE TABLE `blog_comments` (
  `id` int(11) NOT NULL,
  `comment_id` varchar(111) NOT NULL,
  `blog_id` varchar(111) NOT NULL,
  `commenter_id` varchar(111) NOT NULL,
  `comment` text NOT NULL,
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_comments`
--

INSERT INTO `blog_comments` (`id`, `comment_id`, `blog_id`, `commenter_id`, `comment`, `comment_date`) VALUES
(4, '1828371941', '953951286', 'Mellow Junior', 'This blog is awesome', '2024-05-05 15:34:30');

-- --------------------------------------------------------

--
-- Table structure for table `comment_email`
--

CREATE TABLE `comment_email` (
  `id` int(11) NOT NULL,
  `email` varchar(111) NOT NULL,
  `added_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment_email`
--

INSERT INTO `comment_email` (`id`, `email`, `added_date`) VALUES
(1, 'mellow@gmail.com', '2024-05-05 15:33:06');

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `id` int(11) NOT NULL,
  `about_title` varchar(111) NOT NULL,
  `goal` varchar(111) NOT NULL,
  `about` text NOT NULL,
  `facebook` varchar(111) NOT NULL,
  `instagram` varchar(111) NOT NULL,
  `youtube` varchar(111) NOT NULL,
  `twitter` varchar(111) NOT NULL,
  `motto` varchar(255) NOT NULL,
  `slide1_title` varchar(255) NOT NULL,
  `slide1_subtitle` varchar(255) NOT NULL,
  `slide2_title` varchar(255) NOT NULL,
  `slide2_subtitle` varchar(255) NOT NULL,
  `slide3_title` varchar(255) NOT NULL,
  `slide3_subtitle` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(111) NOT NULL,
  `email` varchar(255) NOT NULL,
  `about_image` varchar(255) NOT NULL DEFAULT 'about.png',
  `slide1_img` varchar(255) NOT NULL DEFAULT 'slide1.jpg',
  `slide2_img` varchar(255) NOT NULL DEFAULT 'slide2.jpg',
  `slide3_img` varchar(255) NOT NULL DEFAULT 'slide3.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`id`, `about_title`, `goal`, `about`, `facebook`, `instagram`, `youtube`, `twitter`, `motto`, `slide1_title`, `slide1_subtitle`, `slide2_title`, `slide2_subtitle`, `slide3_title`, `slide3_subtitle`, `address`, `phone`, `email`, `about_image`, `slide1_img`, `slide2_img`, `slide3_img`) VALUES
(1, 'Making this world a better place for everyone', 'About Our Charity', 'At Hope for a good life, we are committed to making a meaningful impact in the lives of those in need. Founded on the principles of compassion and social justice, our organization strives to address pressing challenges faced by communities worldwide\r\n\r\nThrough collaborative efforts and innovative solutions, we work towards creating sustainable change and fostering a more equitable society. With a dedicated team of volunteers and supporters, we aim to inspire hope, empower individuals, and build a brighter future for generations to come.', '', 'asffdfdsfdgdsfe', '', 'asdwegwadafe', 'Empowering communities, transforming lives. Join us in creating a brighter future for all.', 'asfddfssdgfads', 'dfdgfadgfsdsf', 'dsfghfergtefaesrw', 'aegwervsefwef', 'sdfbgrfernhfthgd', 'degfnrbnhfgbb', ' Rwanda, Kigali, Kicukiro, KK 105', '+250 784 146 662', 'mellow@gmail.com', 'about.png', 'slide1.jpg', 'slide2.jpg', 'slide3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `donators`
--

CREATE TABLE `donators` (
  `id` int(11) NOT NULL,
  `donator_name` varchar(111) NOT NULL,
  `donator_email` varchar(111) NOT NULL,
  `donator_location` varchar(111) NOT NULL,
  `amount` int(111) NOT NULL,
  `donated_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `event_id` varchar(111) NOT NULL,
  `event_name` varchar(111) NOT NULL,
  `event_desc` varchar(111) NOT NULL,
  `start_date` varchar(111) NOT NULL,
  `primary_operator` varchar(111) NOT NULL,
  `secondary_operator` varchar(111) NOT NULL,
  `deadline` varchar(111) NOT NULL,
  `status` varchar(111) NOT NULL,
  `budget` varchar(255) NOT NULL,
  `event_thumbnail` varchar(111) NOT NULL,
  `progress` int(11) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `event_id`, `event_name`, `event_desc`, `start_date`, `primary_operator`, `secondary_operator`, `deadline`, `status`, `budget`, `event_thumbnail`, `progress`, `created_date`) VALUES
(2, '5617892', 'fries chips', 'we are going to help these children eat chips', '2024-05-02', '1733709071', '1733709071', '2024-05-03', 'ON GOING', '90000', '611333025.jpg', 36, '2024-05-05 15:47:18'),
(4, '1540610106', 'Afforestation in Bugesera', 'We want to increase the level of trees in arid areas of Bugesera to combat the climate change worries', '2024-05-06', '607613609', '1733709071', '2024-05-31', 'ON GOING', '1000000', '1540610106.jpg', 63, '2024-05-05 03:00:18');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `img_id` varchar(111) NOT NULL,
  `image` varchar(255) NOT NULL,
  `image_description` text NOT NULL,
  `added_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `img_id`, `image`, `image_description`, `added_date`) VALUES
(2, '1776553578', '1776553578.jpeg', 'some random sh*t', '2024-05-03 10:30:51');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `msg_id` varchar(111) NOT NULL,
  `msg_name` varchar(111) NOT NULL,
  `msg_email` varchar(111) NOT NULL,
  `msg_number` varchar(111) NOT NULL,
  `title` varchar(111) NOT NULL,
  `message` text NOT NULL,
  `msg_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `msg_id`, `msg_name`, `msg_email`, `msg_number`, `title`, `message`, `msg_date`) VALUES
(1, '109652903', 'BOBO', 'lol@lol', '567890', 'asdas', 'We really like the spirit of help anyone no matter what', '2024-05-04 12:03:07'),
(2, '1819265827', 'admin', '', '', 'response to BOBO', 'we really honor your dedication with us may GOD bless you', '2024-05-04 12:11:21'),
(3, '674912589', 'Lukas John', 'luk@yahoo.fr', '0784148882', 'We really want to help the cause', '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiores quidem molestias voluptates quas quaerat in veritatis corrupti eum, voluptatum ad quia id, voluptatem modi tempore, sequi commodi est harum?', '2024-05-05 14:31:05');

-- --------------------------------------------------------

--
-- Table structure for table `notif`
--

CREATE TABLE `notif` (
  `id` int(11) NOT NULL,
  `user_id` varchar(111) NOT NULL,
  `category` varchar(111) NOT NULL,
  `content` text NOT NULL,
  `opened` int(11) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notif`
--

INSERT INTO `notif` (`id`, `user_id`, `category`, `content`, `opened`, `created_date`) VALUES
(1, '0910', 'info', 'mellow is this junk', 1, '2024-05-05 03:16:42'),
(2, '0910', 'info', 'Lukas John sent a message.', 1, '2024-05-05 18:43:07');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_id` varchar(111) NOT NULL,
  `user_name` varchar(111) NOT NULL,
  `email` varchar(111) NOT NULL,
  `password` varchar(111) NOT NULL,
  `gender` varchar(23) NOT NULL,
  `role` varchar(111) NOT NULL,
  `profileImg` varchar(111) NOT NULL,
  `added_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `theme` varchar(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `user_name`, `email`, `password`, `gender`, `role`, `profileImg`, `added_date`, `theme`) VALUES
(1, '0910', 'Iraba Arsene', 'iraba@gmail.com', '123', 'male', 'admin', '0910.jpg', '2024-05-05 18:43:33', 'dark'),
(4, '1733709071', 'Test John', 'tom@gmail.com', '3370vol@70T', 'male', 'volunteer', '1733709071.jpg', '2024-05-02 06:54:25', 'dark'),
(5, '607613609', 'Mahtma Gandhi', 'gandhi@gmail.com', '7613vol@13M', 'male', 'Supporter', '607613609.jpg', '2024-05-05 02:59:44', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_comments`
--
ALTER TABLE `blog_comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment_email`
--
ALTER TABLE `comment_email`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `donators`
--
ALTER TABLE `donators`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notif`
--
ALTER TABLE `notif`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `blog_comments`
--
ALTER TABLE `blog_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comment_email`
--
ALTER TABLE `comment_email`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `donators`
--
ALTER TABLE `donators`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `notif`
--
ALTER TABLE `notif`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
