INSERT INTO areas (name) VALUES 
("Kaminda"),
("Wild West"),
("Infantasia"),
("Aribabiba"),
("Mistieri");


-- Cine 180 - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Cine 180", 2, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Espetáculo de Rua - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Espetáculo de Rua", 0, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Infocentro - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Infocentro", 0, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Ghosti Hotel - Wild West
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Ghosti Hotel", 4, "Aberto",  (SELECT id FROM areas WHERE name = "Wild West"));

-- Saloon Show - Wild West
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Saloon Show", 0, "Aberto",  (SELECT id FROM areas WHERE name = "Wild West"));

-- Carrossel di Billie - Infantasia
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Carrossel di Billie", 2, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia"));

-- Hora do Horror Kids - Infantasia
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Hora do Horror Kids", 1, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia"));

-- Super Heroi Show - Aribabiba
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Super Herói Show", 0, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba"));

-- The Looney Tunes Show - Aribabiba (antigo show temático)
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("The Looney Tunes Show", 0, "Fechado", (SELECT id FROM areas WHERE name = "Aribabiba"));

-- Cine 180 - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Cine 180", 2, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Espetáculo de Rua - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Espetáculo de Rua", 0, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Infocentro - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Infocentro", 0, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Ghosti Hotel - Wild West
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Ghosti Hotel", 4, "Aberto",  (SELECT id FROM areas WHERE name = "Wild West"));

-- Saloon Show - Wild West
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Saloon Show", 0, "Aberto",  (SELECT id FROM areas WHERE name = "Wild West"));

-- Carrossel di Billie - Infantasia
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Carrossel di Billie", 2, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia"));

-- Hora do Horror Kids - Infantasia
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Hora do Horror Kids", 1, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia"));

-- Cine 180 - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Cine 180", 2, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Espetáculo de Rua - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Espetáculo de Rua", 0, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Infocentro - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Infocentro", 0, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Ghosti Hotel - Wild West
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Ghosti Hotel", 4, "Aberto", (SELECT id FROM areas WHERE name = "Wild West"));

-- Saloon Show - Wild West
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Saloon Show", 0, "Aberto", (SELECT id FROM areas WHERE name = "Wild West"));

-- Evolution - Mistieri
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Evolution", 6, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri"));

-- Simulákron - Mistieri
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Simulákron", 4, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri"));

-- Theatro di Kaminda - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Theatro di Kaminda", 2, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Eléktron - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Eléktron", 5, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Trukes di Kaminda - Kaminda
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Trukes di Kaminda", 3, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Kastel di Lendas - Infantasia
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Kastel di Lendas", 4, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia"));

-- Minimontanha - Infantasia
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Minimontanha", 2, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia"));

-- Trenzinho - Infantasia
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Trenzinho", 1, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia"));

-- Crazy Wagon - Wild West
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Crazy Wagon", 6, "Aberto", (SELECT id FROM areas WHERE name = "Wild West"));

-- Old West - Wild West
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Old West", 2, "Aberto", (SELECT id FROM areas WHERE name = "Wild West"));

-- Vambatê - Aribabiba
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Vambatê", 3, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba"));

-- Toka di Urso - Aribabiba
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Toka di Urso", 2, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba"));
 use hopi_hari_db;

-- Montezum - Mistieri
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Montezum", 5, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri"));

-- Ekatomb - Mistieri
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Ekatomb", 10, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri"));

-- Katakumb - Mistieri
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Katakumb", 7, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri"));

-- Rio Bravo - Wild West
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Rio Bravo", 15, "Aberto", (SELECT id FROM areas WHERE name = "Wild West"));

-- West River Hotel - Wild West
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("West River Hotel", 3, "Aberto", (SELECT id FROM areas WHERE name = "Wild West"));

-- La Tour Eiffel - Aribabiba
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("La Tour Eiffel", 12, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba"));

-- Vurang - Mistieri
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Vurang", 8, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri"));

-- Giranda Mundi - Kaminda (corrigido)
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Giranda Mundi", 5, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda"));

-- Speedi Kid - Infantasia
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Speedi Kid", 2, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia"));

-- Doremí - Infantasia
INSERT INTO rides(name, waiting_time, status, id_areas)
VALUES ("Doremí", 3, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia"));