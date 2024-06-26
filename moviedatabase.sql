-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-04-2024 a las 12:59:08
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `moviedatabase`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `titulo` varchar(40) NOT NULL,
  `director` varchar(40) NOT NULL,
  `anio` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `titulo`, `director`, `anio`) VALUES
(1, 'Megalodón', 'Jon Turteltaub', 2018),
(5, 'Dune', 'David Lynch', 1984),
(6, 'Evil Dead', 'Sam Raimi', 1981),
(7, 'Terminator', 'James Cameron', 1991),
(8, 'Mentiras Arriesgadas', 'James Cameron', 1994),
(11, 'La Tormenta Perfecta', 'Wolfgang Petersen', 2000),
(13, 'Tiburón', 'Steven Spielberg', 1975),
(15, 'Matrix', 'Wachowski brothers', 1999),
(16, 'The Abyss', 'James Cameron', 1989),
(17, 'Gladiator', 'Ridley Scott', 2000),
(20, 'Gran Torino', 'Clint Eastwood', 2008),
(22, 'Drive', 'Nicolas Winding Refn', 2011);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `titulo_unique` (`titulo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
