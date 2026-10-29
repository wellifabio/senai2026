-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS db_discoteca;
USE db_discoteca;

-- Criar a tabela de discos
CREATE TABLE IF NOT EXISTS discos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    album VARCHAR(100) NOT NULL,
    artista VARCHAR(100) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    imagem_url TEXT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserção de dados de teste (Carga inicial)
INSERT INTO discos (album, artista, genero, imagem_url, preco) VALUES
('Clube da Esquina', 'Milton Nascimento e Lô Borges', 'MPB', 'https://upload.wikimedia.org/wikipedia/pt/2/23/Clube_da_Esquina.jpg', 180.00),
('The Dark Side of the Moon', 'Pink Floyd', 'Rock Progressivo', 'https://upload.wikimedia.org/wikipedia/pt/3/3b/Dark_Side_of_the_Moon.png', 220.50),
('Da Lama ao Caos', 'Chico Science & Nação Zumbi', 'Manguebeat', 'https://upload.wikimedia.org/wikipedia/pt/4/4a/Da_Lama_ao_Caos.jpg', 150.00);
