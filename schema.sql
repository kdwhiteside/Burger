CREATE SCHEMA `burgers_db` ;
USE burgers_db ;

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NOT NULL,
  `devoured` VARCHAR(45) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
