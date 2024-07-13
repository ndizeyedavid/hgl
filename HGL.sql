-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql205.infinityfree.com
-- Generation Time: Jul 13, 2024 at 06:20 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `if0_35730005_hgl`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `mission` text NOT NULL,
  `vision` text NOT NULL,
  `goal` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`mission`, `vision`, `goal`) VALUES
('To support human beings fighting against bad conditions of life and their consequences for a brighter future. We transform the lives of vulnerable children and youth groups by meeting their basic and psychosocial needs, providing them with education and skills, restoring their hope and reintegrating them to become valuable members of the society.', 'Every person lives with dignity and flourishes fully in every society', '1.	Community:  \r\n\r\nProviding counseling and reintegrate youths back into society, assistance them to create small income generating projects and providing them with education and vocational training. \r\nSupport the vulnerable women especially, adolescent or teen mothers with small project that provide income generating activities.\r\n	Fight against poverty in community through small development groups. \r\n \r\n  2. Help / Support Children  \r\n To protect street children and help other vulnerable children, alleviate their poverty and to rehabilitate these children by caring and strengthening their physical and mental health. \r\n \r\n     3.Peaceful family (Living in peace) \r\n\r\n       Contributing to peaceful family life. (Help people for living in Peace) \r\n\r\n4.	Conducting Researches and Surveys on livelihoods of selected vulnerable groups \r\n');

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `id` int(11) NOT NULL,
  `ann_id` varchar(111) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `file` varchar(255) NOT NULL,
  `posted_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `comment_email`
--

CREATE TABLE `comment_email` (
  `id` int(11) NOT NULL,
  `email` varchar(111) NOT NULL,
  `added_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment_email`
--

INSERT INTO `comment_email` (`id`, `email`, `added_date`) VALUES
(1, 'mellow@gmail.com', '2024-05-05 15:33:06'),
(2, 'murekegene@gmail.com', '2024-06-08 10:47:55');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`id`, `about_title`, `goal`, `about`, `facebook`, `instagram`, `youtube`, `twitter`, `motto`, `slide1_title`, `slide1_subtitle`, `slide2_title`, `slide2_subtitle`, `slide3_title`, `slide3_subtitle`, `address`, `phone`, `email`, `about_image`, `slide1_img`, `slide2_img`, `slide3_img`) VALUES
(1, 'Making this world a better place for everyone', 'About Our Charity', 'At Hope for a good life, we are committed to making a meaningful impact in the lives of those in need. Founded on the principles of compassion and social justice, our organization strives to address pressing challenges faced by communities worldwide\r\n\r\nThrough collaborative efforts and innovative solutions, we work towards creating sustainable change and fostering a more equitable society. With a dedicated team of volunteers and supporters, we aim to inspire hope, empower individuals, and build a brighter future for generations to come.', '', 'asffdfdsfdgdsfe', '', 'asdwegwadafe', 'Empowering communities, transforming lives. Join us in creating a brighter future for all.', 'Header', 'New header', 'Update ', 'New update ', 'Slide ', 'New slide', 'BUGESERA NYAMATA', '+250788836467', 'hopeforagoodlife2@gmail.com ', 'about.jpeg', 'slide1.jpeg', 'slide2.jpeg', 'slide3.jpeg');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `donators`
--

INSERT INTO `donators` (`id`, `donator_name`, `donator_email`, `donator_location`, `amount`, `donated_date`) VALUES
(1, 'Lukas John', 'lojoxal401@amankro.com', '', 300, '2024-05-27 11:10:59');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `event_id`, `event_name`, `event_desc`, `start_date`, `primary_operator`, `secondary_operator`, `deadline`, `status`, `budget`, `event_thumbnail`, `progress`, `created_date`) VALUES
(4, '1540610106', 'Afforestation in Bugesera', 'We want to increase the level of trees in arid areas of Bugesera to combat the climate change worries', '2024-05-06', '607613609', '1733709071', '2024-05-31', 'ON GOING', '1000000', '1540610106.jpg', 35, '2024-06-10 11:07:33'),
(9, '652921270', 'Support culture week ', 'Campaign on Rwanda culture to solve problems', '2024-07-11', '666d97a868f4c', '', '2024-07-25', 'ON GOING', '50$', '652921270.jpg', 0, '2024-07-11 15:52:22');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `img_id`, `image`, `image_description`, `added_date`) VALUES
(2, '1776553578', '1776553578.jpeg', 'Nice Gallery', '2024-05-21 11:12:59'),
(3, '1776553578', '1776553578.jpeg', 'Nice Gallery', '2024-05-21 11:12:59'),
(4, '1776553578', '1776553578.jpeg', 'Nice Gallery', '2024-05-21 11:12:59'),
(5, '1776553578', '1776553578.jpeg', 'Nice Gallery', '2024-05-21 11:12:59'),
(6, '1776553578', '1776553578.jpeg', 'Nice Gallery', '2024-05-21 11:12:59'),
(7, '1776553578', '1776553578.jpeg', 'Nice Gallery', '2024-05-21 11:12:59'),
(8, '1776553578', '1776553578.jpeg', 'Nice Gallery', '2024-05-21 11:12:59'),
(9, '1776553578', '1776553578.jpeg', 'Nice Gallery', '2024-05-21 11:12:59'),
(10, '1047597060', '1047597060.jpeg', 'supporting children with nutrion problems', '2024-07-13 06:17:18');

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
  `title` varchar(111) NOT NULL DEFAULT 'Message',
  `message` text NOT NULL,
  `msg_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `msg_id`, `msg_name`, `msg_email`, `msg_number`, `title`, `message`, `msg_date`) VALUES
(1, '109652903', 'BOBO', 'lol@lol', '567890', 'asdas', 'We really like the spirit of help anyone no matter what', '2024-05-04 12:03:07'),
(2, '1819265827', 'admin', '', '', 'response to BOBO', 'we really honor your dedication with us may GOD bless you', '2024-05-04 12:11:21'),
(3, '674912589', 'Lukas John', 'luk@yahoo.fr', '0784148882', 'We really want to help the cause', '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiores quidem molestias voluptates quas quaerat in veritatis corrupti eum, voluptatum ad quia id, voluptatem modi tempore, sequi commodi est harum?', '2024-05-05 14:31:05'),
(10, '1971300167', 'Janvier Nzanywayimana', 'janvir2@gmail.com', '', 'Message', 'Amakuru ? Ndizera ko mumeze neza', '2024-07-12 14:26:07'),
(11, '1942503641', 'admin', '', '', 'salut', 'yeah it is going well', '2024-07-13 07:48:58');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notif`
--

INSERT INTO `notif` (`id`, `user_id`, `category`, `content`, `opened`, `created_date`) VALUES
(1, '0910', 'info', 'mellow is this junk', 1, '2024-05-05 03:16:42'),
(2, '0910', 'info', 'Lukas John sent a message.', 1, '2024-05-05 18:43:07'),
(3, '0910', 'info', 'Tuyisenge Innocent sent an application on <b>internship</b>', 0, '2024-05-21 05:36:59'),
(4, '0910', 'info', '<b>mellow Junior</b> Sent a message', 0, '2024-05-22 16:36:36'),
(5, '0910', 'info', '<b>mellow Junior</b> Sent a message', 0, '2024-05-22 16:37:24'),
(6, '0910', 'info', '<b>mellow Junior</b> Sent a message', 0, '2024-05-22 16:38:50'),
(7, '0910', 'info', '<b>mellow Junior</b> Sent a message', 0, '2024-05-22 16:39:18'),
(8, '0910', 'info', '<b>mellow Junior</b> Sent a message', 0, '2024-05-22 16:39:44'),
(9, '0910', 'info', '<b>mellow Junior</b> Sent a message', 0, '2024-05-22 16:40:04'),
(10, '0910', 'info', '  sent an application on <b>volunteer</b>', 0, '2024-05-27 09:48:46'),
(11, '0910', 'info', 'kalisa john sent an application on <b>volunteer</b>', 0, '2024-06-15 13:25:28'),
(12, '0910', 'info', 'murasira frank sent an application on <b>internship</b>', 0, '2024-06-15 13:31:21'),
(13, '0910', 'info', 'Janvier NZANYWAYIMANA sent an application on <b>internship</b>', 0, '2024-06-15 14:39:08'),
(14, '0910', 'info', 'Janvier NZANYWAYIMANA sent an application on <b>volunteer</b>', 0, '2024-06-15 14:50:52'),
(15, '0910', 'info', 'arsene iraab sent an application on <b>volunteer</b>', 0, '2024-07-03 09:29:47'),
(16, '0910', 'info', 'Kanzira Regis sent an application on <b>volunteer</b>', 0, '2024-07-12 07:32:05'),
(17, '0910', 'info', '<b>Janvier Nzanywayimana</b> Sent a message', 0, '2024-07-12 14:26:07');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `id` int(11) NOT NULL,
  `report_id` varchar(111) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(111) NOT NULL,
  `category` varchar(111) NOT NULL,
  `file` varchar(111) NOT NULL,
  `posted_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`id`, `report_id`, `title`, `description`, `image`, `category`, `file`, `posted_date`) VALUES
(4, '1874285914', 'Ict training ', 'Ict training on 2024', '1874285914.jpg', 'Ict', '1874285914.pdf', '2024-07-11 16:06:27');

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

CREATE TABLE `story` (
  `id` int(11) NOT NULL,
  `story_id` varchar(111) NOT NULL,
  `story_title` varchar(255) NOT NULL,
  `story_content` text NOT NULL,
  `story_image` varchar(111) NOT NULL,
  `poster` varchar(111) NOT NULL,
  `posted_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `story`
--

INSERT INTO `story` (`id`, `story_id`, `story_title`, `story_content`, `story_image`, `poster`, `posted_date`) VALUES
(6, '166342027', 'Hgl jumelage with Winnipeg community ', 'Hgl has signed agreement with Winnipeg community.', '166342027.jpg', 'admin', '2024-07-11 15:59:33');

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
  `phone` varchar(111) NOT NULL,
  `role` varchar(111) NOT NULL,
  `status` varchar(111) NOT NULL,
  `profileImg` varchar(111) NOT NULL,
  `added_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `theme` varchar(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `user_name`, `email`, `password`, `phone`, `role`, `status`, `profileImg`, `added_date`, `theme`) VALUES
(1, '0910', 'Iraba Arsene', 'iraba@gmail.com', '123', '', 'admin', '', '0910.jpg', '2024-05-05 18:43:33', 'dark'),
(18, '666d97a868f4c', 'murasira frank', 'mufrank@gmail.com', '666d97a868f4c', '0788887120', 'intern', '', '666d97a868f4c.jpeg', '2024-06-15 13:31:21', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `story`
--
ALTER TABLE `story`
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
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `blog_comments`
--
ALTER TABLE `blog_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comment_email`
--
ALTER TABLE `comment_email`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `notif`
--
ALTER TABLE `notif`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `story`
--
ALTER TABLE `story`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
