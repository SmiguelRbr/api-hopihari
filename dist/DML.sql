SELECT users.first_name as name, 
	users.id,
	rides.name,
    rides.id
	from `lines`
    
INNER JOIN users 
ON users.id = `lines`.id_user
INNER JOIN 	rides 
on rides.id = `lines`.id_ride

insert into areas (name) VALUES ("Aribabiba");
insert into areas (name) VALUES ("Mistieri");
insert into areas (name) VALUES ("Kaminda Mundi");
insert into areas (name) VALUES ("Wild West");
insert into areas (name) VALUES ("Infantasia");



select * from areas;
select * from rides;

insert into rides (name, waiting_time, status, areas_id);
VALUES
  ("Aribabobbi", 3, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Cinemotion", 4, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Hadikali", 7, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Jambalaia", 5, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Katapul", 5, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Parangolé", 4, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Speedi '64", 4, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("Vambatê", 6, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba")),
  ("La Tour Eiffel", 12, "Aberto", (SELECT id FROM areas WHERE name = "Aribabiba")),

  ("Montezum", 5, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri")),
  ("Vurang", 5, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri")),
  ("Katakumb", 4, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri")),
  ("La Mina Del Joe Sacramento", 4, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri")),
  ("Rio Bravo", 6, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri")),
  ("Ekatomb", 6, "Aberto", (SELECT id FROM areas WHERE name = "Mistieri")),

  ("Giranda Mundi", 3, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda Mundi")),
  ("Jogakí di Kaminda", 2, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda Mundi")),
  ("Theatro di Kaminda", 2, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda Mundi")),
  (" Cine 180 ", 2, "Aberto", (SELECT id FROM areas WHERE name = "Kaminda Mundi")),
  

  ("Ghosti Hotel", 4, "Aberto", (SELECT id FROM areas WHERE name = "Wild West")),
  ("Vulaviking", 5, "Aberto", (SELECT id FROM areas WHERE name = "Wild West")),
  ("Bravo Bull", 3, "Aberto", (SELECT id FROM areas WHERE name = "Wild West")),
  ("Saloon Show", 0, "Aberto", (SELECT id FROM areas WHERE name = "Wild West")),
 

  ("Giranda Pokotó", 2, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia")),
  ("Astronavi", 2, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia")),
  ("Dispenkito", 2, "Aberto", (SELECT id FROM areas WHERE name = "Infantasia"));
  
  

desc rides;
SET SQL_SAFE_UPDATES = 0;

select * from rides where name =  "Aribabobbi";
update rides set image = "Aribabobbi2.jpg" where name = "Aribabobbi";


select name from rides;
update rides set image = "cine.png" where name = "Cinemotion";


select name from rides;
update rides set image = "hadikali.png" where name = "Hadikali";


select name from rides;
update rides set image = "Katapul.png" where name = "Katapul";

select name from rides;
update rides set image = "jambalaia.png" where name = "Jambalaia";


select name from rides;
update rides set image = "Parangolé.png" where name = "Parangolé";


select name from rides;
update rides set image = "speedi.png" where name = "Speedi '64";


select name from rides;
update rides set image = "Vambatê.png" where name = "Vambatê";


select name from rides;
update rides set image = "latour.png" where name = "La Tour Eiffel";


select name from rides;
update rides set image = "Montezum.jng" where name = "Montezum";



select name from rides;
update rides set image = "vugaga.png" where name = "Vurang";


select name from rides;
update rides set image = "Katakumb.png" where name = "Katakumb";


select name from rides;
update rides set image = "LaMina.png" where name = "La Mina Del Joe Sacramento";


select name from rides;
update rides set image = "rio.png" where name = "Rio Bravo";


select name from rides;
update rides set image = "giranda.png" where name = "Giranda Mundi";


select name from rides;
update rides set image = "ekaka.png" where name = "Ekatomb";


select name from rides;
update rides set image = "jogakí_di_Kaminda.png" where name = "Jogakí di Kaminda";


select name from rides;
update rides set image = "teatro.png" where name = "Theatro di Kaminda";

select name from rides;
update rides set image = "cien.png" where name = " Cine 180 ";


select name from rides;
update rides set image = "ghosti.png" where name = "Ghosti Hotel";


select name from rides;
update rides set image = "vulk.png" where name = "Vulaviking";

select name from rides;
update rides set image = "bravo.png" where name = "Bravo Bull";


select name from rides;
update rides set image = "saalon.png" where name = "Saloon Show";

select name from rides;
update rides set image = "poko.png" where name = "Giranda Pokotó";

select name from rides;
update rides set image = "astro.png" where name = "Astronavi";

select name from rides;
update rides set image = "dis.png" where name = "Dispenkito";

