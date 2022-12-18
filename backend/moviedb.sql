CREATE DATABASE IF NOT EXISTS moviedb;

USE moviedb;

CREATE TABLE
    filmes(
        id int PRIMARY KEY AUTO_INCREMENT,
        titulo VARCHAR(50) NOT NULL,
        descricao VARCHAR(225) NOT NULL,
        autor VARCHAR(50) NOT NULL,
        imagem VARCHAR(225) NOT NULL
    )