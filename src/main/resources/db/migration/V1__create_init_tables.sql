CREATE TABLE IF NOT EXISTS `administration` (
  `ADM_KEY` VARCHAR(50) NOT NULL,
  `VALUE` VARCHAR(300) NULL DEFAULT 'null',
  PRIMARY KEY (`ADM_KEY`),
  UNIQUE INDEX `ADM_KEY_UNIQUE` (`ADM_KEY` ASC));