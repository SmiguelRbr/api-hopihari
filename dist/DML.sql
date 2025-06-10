INSERT INTO areas (name) VALUES 
("Kaminda"),
("Wild West"),
("Infantasia"),
("Aribabiba"),
("Mistieri");


-- INSERT INTO para tabela rides do Hopi Hari
-- Assumindo que os id_areas correspondem a:
-- 1 = Kaminda Mundi, 2 = Infantasia, 3 = Mistieri, 4 = Wild West, 5 = Aribabiba

-- ÁREA KAMINDA MUNDI (id_areas = 1)
INSERT INTO rides (name, waiting_time, status, id_areas, image) VALUES 
('Giranda Mundi', 15, 'Funcionando', 1, 'giranda_mundi.jpg'),
('Tirolesa', 10, 'Funcionando', 1, 'tirolesa.jpg');

-- ÁREA INFANTASIA (id_areas = 2) 
INSERT INTO rides (name, waiting_time, status, id_areas, image) VALUES 
('Giranda Pokotó', 5, 'Funcionando', 3, 'giranda_pokoto.jpg'),
('Giralata', 8, 'Funcionando', 3, 'giralata.jpg'),
('Astronavi', 10, 'Funcionando', 3, 'astronavi.jpg'),
('Kastel di Lendas', 12, 'Funcionando', 3, 'kastel_lendas.jpg'),
('Toka do Uga', 7, 'Funcionando', 3, 'toka_uga.jpg'),
('Vambatê', 6, 'Funcionando', 3, 'vambate.jpg'),
('Klapi Klapi Show', 0, 'Funcionando', 3, 'klapi_show.jpg');

-- ÁREA MISTIERI (id_areas = 3)
INSERT INTO rides (name, waiting_time, status, id_areas, image) VALUES 
('Ghosti Hotel', 20, 'Funcionando', 5, 'ghosti_hotel.jpg');

-- ÁREA WILD WEST (id_areas = 4)
INSERT INTO rides (name, waiting_time, status, id_areas, image) VALUES 
('La Mina del Joe Sacramento', 25, 'Funcionando', 2, 'la_mina.jpg'),
('Bravo Bull', 15, 'Funcionando', 2, 'bravo_bull.jpg'),
('Rio Bravo', 30, 'Funcionando', 2, 'rio_bravo.jpg'),
('Saloon', 0, 'Funcionando', 2, 'saloon.jpg');

-- ÁREA ARIBABIBA (id_areas = 5)
INSERT INTO rides (name, waiting_time, status, id_areas, image) VALUES 
('Namuskita', 35, 'Funcionando', 4, 'namuskita.jpg'),
('Evolution', 25, 'Funcionando', 4, 'evolution.jpg'),
('Vamvolari', 20, 'Funcionando', 4, 'vamvolari.jpg'),
('Spleshi', 18, 'Funcionando', 4, 'spleshi.jpg');

-- OBSERVAÇÕES:
-- 1. Os tempos de espera são estimativas baseadas na popularidade das atrações
-- 2. Status definido como 'Funcionando' - ajuste conforme necessário
-- 3. Nomes de imagens são sugestões - ajuste conforme seus arquivos
-- 4. Ajuste os id_areas conforme sua tabela de áreas
-- 5. Shows têm waiting_time = 0 pois são apresentações com horários fixos

-- PRINCIPAIS ATRAÇÕES POR CATEGORIA:
-- Montanhas-russas: Namuskita, La Mina del Joe Sacramento
-- Atrações aquáticas: Rio Bravo, Spleshi  
-- Atrações familiares: Giranda Mundi, Vamvolari
-- Atrações infantis: Giranda Pokotó, Astronavi, Giralata
-- Shows: Klapi Klapi Show, Saloon
-- Aventura: Tirolesa, Toka do Uga






-- UPDATE para definir imagens das atrações do Hopi Hari

-- ÁREA KAMINDA MUNDI
UPDATE rides SET image = 'giranda_mundi.jpg' WHERE name = 'Giranda Mundi';
UPDATE rides SET image = 'tirolesa.jpg' WHERE name = 'Tirolesa';

-- ÁREA INFANTASIA
UPDATE rides SET image = 'giranda_pokoto.jpg' WHERE name = 'Giranda Pokotó';
UPDATE rides SET image = 'giralata.jpg' WHERE name = 'Giralata';
UPDATE rides SET image = 'astronavi.jpg' WHERE name = 'Astronavi';
UPDATE rides SET image = 'kastel_lendas.jpg' WHERE name = 'Kastel di Lendas';
UPDATE rides SET image = 'toka_uga.jpg' WHERE name = 'Toka do Uga';
UPDATE rides SET image = 'vambate.jpg' WHERE name = 'Vambatê';
UPDATE rides SET image = 'klapi_show.jpg' WHERE name = 'Klapi Klapi Show';

-- ÁREA MISTIERI
UPDATE rides SET image = 'ghosti_hotel.jpg' WHERE name = 'Ghosti Hotel';

-- ÁREA WILD WEST
UPDATE rides SET image = 'la_mina.jpg' WHERE name = 'La Mina del Joe Sacramento';
UPDATE rides SET image = 'bravo_bull.jpg' WHERE name = 'Bravo Bull';
UPDATE rides SET image = 'rio_bravo.jpg' WHERE name = 'Rio Bravo';
UPDATE rides SET image = 'saloon.jpg' WHERE name = 'Saloon';

-- ÁREA ARIBABIBA
UPDATE rides SET image = 'namuskita.jpg' WHERE name = 'Namuskita';
UPDATE rides SET image = 'evolution.jpg' WHERE name = 'Evolution';
UPDATE rides SET image = 'vamvolari.jpg' WHERE name = 'Vamvolari';
UPDATE rides SET image = 'spleshi.jpg' WHERE name = 'Spleshi';

-- OBSERVAÇÕES:
-- 1. Certifique-se de que os nomes das atrações correspondem exatamente aos registros na tabela
-- 2. Ajuste os nomes dos arquivos de imagem conforme necessário
-- 3. Verifique se os arquivos de imagem existem no diretório correto