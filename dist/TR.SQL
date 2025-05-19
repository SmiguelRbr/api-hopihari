DELIMITER $$

CREATE TRIGGER `after_insert_on_lines`
AFTER INSERT ON `lines`
FOR EACH ROW
BEGIN
    DECLARE wait_time INT;
    DECLARE line_count INT; 
    DECLARE total_wait INT; 

    
    SELECT 
        tempo_espera INTO wait_time
    FROM 
        hopi_hari_db.atracoes
    WHERE 
        id = NEW.atracoes_id;


    SELECT 
        COUNT(users_id) INTO line_count
    FROM 
        hopi_hari_db.lines
    WHERE 
        atracoes_id = NEW.atracoes_id;


    SET total_wait = wait_time * line_count;

    
    INSERT INTO `hopi_hari_db`.`notifications` (`description`, `id_rides`, `id_user`, `status`)
    VALUES (
        CONCAT('O tempo estimado de espera para o brinquedo é de ', total_wait, ' minutos.'),
        NEW.atracoes_id,
        NEW.users_id,
        1
    );
END$$

DELIMITER ;