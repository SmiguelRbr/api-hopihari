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
