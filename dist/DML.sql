INSERT INTO `hopi_hari_db`.`users` (`first_name`, `last_name`, `email`, `password`, `birth_date`, `phone`) VALUES
('João', 'Silva', 'joao.silva@example.com', 'senha123', '1990-05-15', '11999999999'),
('Maria', 'Oliveira', 'maria.oliveira@example.com', 'senha456', '1985-10-20', '11988888888'),
('Carlos', 'Santos', 'carlos.santos@example.com', 'senha789', '1995-03-10', NULL);

INSERT INTO `hopi_hari_db`.`atracoes` (`nome`, `tempo_espera`, `status`, `area`) VALUES
('Montanha Russa', 30, 'Ativo', 'Aventura'),
('Roda Gigante', 15, 'Ativo', 'Família'),
('Casa do Terror', 45, 'Inativo', 'Terror'),
('Carrossel', 10, 'Ativo', 'Infantil');

INSERT INTO `hopi_hari_db`.`notifications` (`description`, `id_rides`, `id_user`, `status`) VALUES
('A Montanha Russa está com tempo de espera reduzido!', 1, 1, 1),
('A Roda Gigante está temporariamente fechada.', 2, 2, 0),
('A Casa do Terror reabriu!', 3, 3, 1);

INSERT INTO `hopi_hari_db`.`lines` (`users_id`, `atracoes_id`) VALUES
(1, 1), -- João entrou na fila da Montanha Russa
(1, 2), -- João entrou na fila da Roda Gigante
(2, 3), -- Maria entrou na fila da Casa do Terror
(3, 4); -- Carlos entrou na fila do Carrossel

ALTER TABLE `hopi_hari_db`.`notifications`
MODIFY COLUMN `description` VARCHAR(255); -- Adjust the length as needed



{
  "first_name": "miguel",
  "last_name": "rubens",
  "email": "miguel@example.com",
  "password": "senha123",
  "birth_date": "1990-05-15",
  "phone": "11999999999"
}


{
  "first_name": "jhon",
  "last_name": "doe",
  "email": "jhon@example.com",
  "password": "senha123",
  "birth_date": "1990-05-15",
  "phone": "11999999999"
}


{
  "first_name": "teste",
  "last_name": "teste",
  "email": "teste@example.com",
  "password": "senha123",
  "birth_date": "1990-05-15",
  "phone": "11999999999"
}

SELECT 
 CONCAT(u.first_name, ' ', u.last_name) AS nome_usuario,
    l.users_id AS id_usuario,
      a.nome AS nome_brinquedo,
    l.atracoes_id AS id_brinquedo
FROM 
    hopi_hari_db.lines l
JOIN 
    hopi_hari_db.atracoes a ON l.atracoes_id = a.id
JOIN 
    hopi_hari_db.users u ON l.users_id = u.id


INSERT INTO `hopi_hari_db`.`lines` (`users_id`, `atracoes_id`) VALUES
(6, 7), -- João entrou na fila da Montanha Russa
(6, 9), -- João entrou na fila da Roda Gigante
(7, 7), -- Maria entrou na fila da Casa do Terror
(7, 9), -- Carlos entrou na fila do Carrossel
(8, 6), -- Maria entrou na fila da Casa do Terror
(8, 10), -- João entrou na fila da Montanha Russa
(7, 10);











SELECT 
 CONCAT(u.first_name, ' ', u.last_name) AS nome_usuario,
    l.users_id AS id_usuario,
      a.nome AS nome_brinquedo,
    l.atracoes_id AS id_brinquedo
FROM 
    hopi_hari_db.lines l
JOIN 
    hopi_hari_db.atracoes a ON l.atracoes_id = a.id
JOIN 
    hopi_hari_db.users u ON l.users_id = u.id


INSERT INTO area (nome) VALUES 
('Aribabiba'),
('Mistieri'),
('Infantasia'),
('Wild West'),
('Kaminda Mundi');


-- Aribabiba
INSERT INTO atracoes (nome, tempo_espera, status, area, area_id) VALUES 
('Speedi ‘64', 10, 'aberto', 'Aribabiba', (SELECT id FROM area WHERE nome = 'Aribabiba')),
('Vambatê', 8, 'aberto', 'Aribabiba', (SELECT id FROM area WHERE nome = 'Aribabiba')),
('Cinemotion', 5, 'aberto', 'Aribabiba', (SELECT id FROM area WHERE nome = 'Aribabiba')),
('Katapul', 12, 'aberto', 'Aribabiba', (SELECT id FROM area WHERE nome = 'Aribabiba')),
('Jambalaia', 7, 'aberto', 'Aribabiba', (SELECT id FROM area WHERE nome = 'Aribabiba')),
('Aribabobbi', 6, 'aberto', 'Aribabiba', (SELECT id FROM area WHERE nome = 'Aribabiba')),
('Parangolé', 9, 'aberto', 'Aribabiba', (SELECT id FROM area WHERE nome = 'Aribabiba')),
('Hadikali', 11, 'aberto', 'Aribabiba', (SELECT id FROM area WHERE nome = 'Aribabiba'));

-- Mistieri
INSERT INTO atracoes (nome, tempo_espera, status, area, area_id) VALUES 
('Katakumb', 10, 'aberto', 'Mistieri', (SELECT id FROM area WHERE nome = 'Mistieri')),
('Ekatomb', 15, 'aberto', 'Mistieri', (SELECT id FROM area WHERE nome = 'Mistieri')),
('Montezum', 20, 'aberto', 'Mistieri', (SELECT id FROM area WHERE nome = 'Mistieri')),
('Simulákron', 5, 'aberto', 'Mistieri', (SELECT id FROM area WHERE nome = 'Mistieri')),
('Vulaviking', 8, 'aberto', 'Mistieri', (SELECT id FROM area WHERE nome = 'Mistieri')),
('Vurang', 12, 'aberto', 'Mistieri', (SELECT id FROM area WHERE nome = 'Mistieri'));

-- Infantasia
INSERT INTO atracoes (nome, tempo_espera, status, area, area_id) VALUES 
('Kastel di Lendas', 7, 'aberto', 'Infantasia', (SELECT id FROM area WHERE nome = 'Infantasia')),
('Giranda Pokotó', 6, 'aberto', 'Infantasia', (SELECT id FROM area WHERE nome = 'Infantasia')),
('Toka do Uga', 5, 'aberto', 'Infantasia', (SELECT id FROM area WHERE nome = 'Infantasia')),
('Bugabalum', 4, 'aberto', 'Infantasia', (SELECT id FROM area WHERE nome = 'Infantasia')),
('Giralata', 5, 'aberto', 'Infantasia', (SELECT id FROM area WHERE nome = 'Infantasia')),
('Dispenkito', 6, 'aberto', 'Infantasia', (SELECT id FROM area WHERE nome = 'Infantasia')),
('Komboio', 5, 'aberto', 'Infantasia', (SELECT id FROM area WHERE nome = 'Infantasia')),
('Astronavi', 7, 'aberto', 'Infantasia', (SELECT id FROM area WHERE nome = 'Infantasia')),
('Klapi Klapi', 4, 'aberto', 'Infantasia', (SELECT id FROM area WHERE nome = 'Infantasia'));

-- Wild West
INSERT INTO atracoes (nome, tempo_espera, status, area, area_id) VALUES 
('NamusKita', 9, 'aberto', 'Wild West', (SELECT id FROM area WHERE nome = 'Wild West')),
('La Mina Del Joe Sacramento', 10, 'aberto', 'Wild West', (SELECT id FROM area WHERE nome = 'Wild West')),
('Evolution', 15, 'aberto', 'Wild West', (SELECT id FROM area WHERE nome = 'Wild West')),
('Bravo Bull', 8, 'aberto', 'Wild West', (SELECT id FROM area WHERE nome = 'Wild West')),
('Ghosti Hotel', 12, 'aberto', 'Wild West', (SELECT id FROM area WHERE nome = 'Wild West')),
('Rio Bravo', 14, 'aberto', 'Wild West', (SELECT id FROM area WHERE nome = 'Wild West')),
('Vamvolari', 10, 'aberto', 'Wild West', (SELECT id FROM area WHERE nome = 'Wild West')),
('Spleshi', 13, 'aberto', 'Wild West', (SELECT id FROM area WHERE nome = 'Wild West')),
('Tirolesa', 11, 'aberto', 'Wild West', (SELECT id FROM area WHERE nome = 'Wild West'));

-- Kaminda Mundi
INSERT INTO atracoes (nome, tempo_espera, status, area, area_id) VALUES 
('Theatro di Kaminda', 5, 'aberto', 'Kaminda Mundi', (SELECT id FROM area WHERE nome = 'Kaminda Mundi')),
('Giranda Mundi', 7, 'aberto', 'Kaminda Mundi', (SELECT id FROM area WHERE nome = 'Kaminda Mundi')),
('Jogakí di Kaminda', 6, 'aberto', 'Kaminda Mundi', (SELECT id FROM area WHERE nome = 'Kaminda Mundi')),
('Le Voyage', 8, 'aberto', 'Kaminda Mundi', (SELECT id FROM area WHERE nome = 'Kaminda Mundi'));



