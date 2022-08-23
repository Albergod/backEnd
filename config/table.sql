create database contracts_database;
use contracts_database;

CREATE TABLE contracts(
	id INT auto_increment NOT NULL PRIMARY KEY,
    nombre varchar(255) NOT NULL,
    formato varchar(255),
    ficha varchar(255) NOT NULL,
	año INT 
);