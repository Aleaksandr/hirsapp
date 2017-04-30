CREATE TABLE IF NOT EXISTS `persistent_logins` (
  `username` VARCHAR(64) NOT NULL,
  `series` VARCHAR(64) PRIMARY KEY,
  `token` VARCHAR(64) NOT NULL,
  `last_used` TIMESTAMP NOT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

INSERT INTO `user` (`LOGIN`, `PASSWORD`, `TYPE`, `VENDOR_ID`) VALUES ('ADMIN_HA', '8e45809f2687321b26770b58432cebffe212face', 'ROLE_ADMIN', 'FL_OZON');
INSERT INTO `user` (`LOGIN`, `PASSWORD`, `TYPE`, `VENDOR_ID`) VALUES ('TEST_OZON', '47f72ad7c95f61f3a802c6529c9579f7bcc807a0', 'ROLE_USER', 'FL_OZON');
INSERT INTO `user` (`LOGIN`, `PASSWORD`, `TYPE`, `VENDOR_ID`) VALUES ('ADMIN_DM', '0c3b78026ffbb8743af9a09762cd964fec0f664f', 'ROLE_ADMIN', 'FL_OZON');