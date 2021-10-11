-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema vitaldb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `vitaldb` ;

-- -----------------------------------------------------
-- Schema vitaldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vitaldb` DEFAULT CHARACTER SET utf8 ;
USE `vitaldb` ;

-- -----------------------------------------------------
-- Table `patient`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `patient` ;

CREATE TABLE IF NOT EXISTS `patient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(90) NOT NULL,
  `last_name` VARCHAR(90) NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `image_id_url` VARCHAR(300) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `medical_history`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `medical_history` ;

CREATE TABLE IF NOT EXISTS `medical_history` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `diagnosis` TEXT NULL,
  `patient_id` INT NOT NULL,
  `date_verified` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_medical_history_patient_idx` (`patient_id` ASC),
  CONSTRAINT `fk_medical_history_patient`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `family_medical_history`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `family_medical_history` ;

CREATE TABLE IF NOT EXISTS `family_medical_history` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `medical_condition` TEXT NULL,
  `family_relation` VARCHAR(45) NULL,
  `patient_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_family_medical_history_patient1_idx` (`patient_id` ASC),
  CONSTRAINT `fk_family_medical_history_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vital_sign`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `vital_sign` ;

CREATE TABLE IF NOT EXISTS `vital_sign` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vital_date_time` DATETIME NOT NULL,
  `systolic_pressure` INT NULL,
  `diastolic_pressure` INT NULL,
  `pulse_rate` INT NULL,
  `temperature` DECIMAL(4,1) NULL,
  `respiratory_rate` INT NULL,
  `patient_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_vital_sign_patient1_idx` (`patient_id` ASC),
  CONSTRAINT `fk_vital_sign_patient1`
    FOREIGN KEY (`patient_id`)
    REFERENCES `patient` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS vital@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'vital'@'localhost' IDENTIFIED BY 'vital';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'vital'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `patient`
-- -----------------------------------------------------
START TRANSACTION;
USE `vitaldb`;
INSERT INTO `patient` (`id`, `first_name`, `last_name`, `date_of_birth`, `image_id_url`) VALUES (1, 'Tom', 'Sawyer', '1966-01-01', 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
INSERT INTO `patient` (`id`, `first_name`, `last_name`, `date_of_birth`, `image_id_url`) VALUES (2, 'Jacob', 'Nowes', '1955-06-15', 'https://thumbs.dreamstime.com/b/headshot-portrait-smiling-man-glasses-studio-background-headshot-portrait-smiling-millennial-man-glasses-white-165218068.jpg');
INSERT INTO `patient` (`id`, `first_name`, `last_name`, `date_of_birth`, `image_id_url`) VALUES (3, 'Arthur', 'Barbosa', '1997-12-12', 'https://media.gettyimages.com/photos/portrait-of-smiling-young-man-wearing-eyeglasses-picture-id985138634?s=612x612');
INSERT INTO `patient` (`id`, `first_name`, `last_name`, `date_of_birth`, `image_id_url`) VALUES (4, 'William', 'Witlow', '1959-06-04', 'https://image.shutterstock.com/image-photo/closeup-headshot-business-man-standing-260nw-1275769513.jpg');

COMMIT;


-- -----------------------------------------------------
-- Data for table `medical_history`
-- -----------------------------------------------------
START TRANSACTION;
USE `vitaldb`;
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (1, 'Cystic Fibrosis', 1, '2021-09-25');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (2, 'Congestive Heart Failure', 2, '2021-10-03');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (3, 'Chronic Lumbago', 1, '2021-09-09');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (4, 'Hypogonadism', 2, '2021-09-09');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (5, 'Depression', 2, '2021-09-25');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (6, 'Anxiety', 2, '2021-09-25');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (7, 'Hypertension', 1, '2021-09-25');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (8, 'Hyperlipidemia', 1, '2021-09-25');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (9, 'Obesity', 3, '2021-10-09');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (10, 'Acid Reflux', 3, '2021-10-09');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (11, 'Seasonal Allergies', 3, '2021-10-09');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (12, 'Seasonal Affective Disorder', 4, '2021-10-09');
INSERT INTO `medical_history` (`id`, `diagnosis`, `patient_id`, `date_verified`) VALUES (13, 'Depression', 4, '2021-10-09');

COMMIT;


-- -----------------------------------------------------
-- Data for table `family_medical_history`
-- -----------------------------------------------------
START TRANSACTION;
USE `vitaldb`;
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (1, 'Depression', 'Mother', 1);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (2, 'Anxiety', 'Father', 1);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (3, 'Heart Condition', 'Sister', 2);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (4, 'Congestive Heart Failure', 'Father', 2);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (5, 'Myocardial Infarction', 'Paternal Grand Father', 1);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (6, 'Myocardial Infarction', 'Father', 3);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (7, 'Deep Vein Thrombosis', 'Father', 1);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (8, 'Depression', 'Mother', 4);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (9, 'Anxiety', 'Brother', 1);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (10, 'Obesity', 'Brother', 3);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (11, 'Asthma', 'Brother', 3);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (12, 'Lung Cancer', 'Mother', 4);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (13, 'Diabetes', 'Mother', 2);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (14, 'Lung Condition', 'Sister', 3);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (15, 'ADHD', 'Brother', 4);
INSERT INTO `family_medical_history` (`id`, `medical_condition`, `family_relation`, `patient_id`) VALUES (16, 'Congetive Heart Failure', 'Father', 4);

COMMIT;


-- -----------------------------------------------------
-- Data for table `vital_sign`
-- -----------------------------------------------------
START TRANSACTION;
USE `vitaldb`;
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (1, '2021-10-05 10:25:00', 125, 68, 55, 98.2, 16, 1);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (2, '2021-10-06 11:14:00', 155, 98, 98, 98.9, 18, 2);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (3, '2021-10-09 06:45:00', 101, 50, 52, 97.8, 14, 2);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (4, '2021-10-09 07:45:00', 98, 46, 66, 98.8, 16, 2);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (5, '2021-10-09 08:45:00', 96, 56, 76, 99.2, 18, 2);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (6, '2021-10-09 09:45:00', 92, 58, 88, 100.8, 19, 2);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (7, '2021-10-09 05:00:00', 115, 80, 82, 96.8, 16, 3);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (8, '2021-10-09 06:00:00', 120, 82, 80, 97.8, 16, 3);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (9, '2021-10-09 07:00:00', 116, 82, 65, 97.9, 16, 3);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (10, '2021-10-09 07:00:00', 115, 88, 68, 98.9, 16, 4);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (11, '2021-10-09 08:00:00', 125, 80, 65, 98.0, 16, 4);
INSERT INTO `vital_sign` (`id`, `vital_date_time`, `systolic_pressure`, `diastolic_pressure`, `pulse_rate`, `temperature`, `respiratory_rate`, `patient_id`) VALUES (12, '2021-10-09 06:00:00', 145, 92, 81, 98.5, 18, 1);

COMMIT;

