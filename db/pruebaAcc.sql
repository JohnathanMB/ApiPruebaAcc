CREATE DATABASE pruebaacc;

USE pruebaacc;

CREATE TABLE IF NOT EXISTS `cliente` (
    `cc` int(20) NOT NULL,
    `nombre` VARCHAR(50) NOT NULL,
    `apellido` VARCHAR(50) NOT NULL,
    `fecha_nacimientoi` date NOT NULL,
    PRIMARY KEY(`cc`)
)ENGINE=InnoDB DEFAULT CHARACTER SET=utf8;

Describe cliente;

