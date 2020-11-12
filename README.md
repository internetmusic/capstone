# capstone

## MYSQL COMMANDS

### Create Database 
```
create database guestbook
```

### Create Table guests
```
CREATE TABLE `guestbook`.`guests` (
  `guest id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `message` VARCHAR(45) NULL,
  `time` INT NULL,
  PRIMARY KEY (`guest id`));
```

### Insert a record into guests table 
```
INSERT INTO `guestbook`.`guests` (`guest id`, `name`, `message`, `time`) 
                         VALUES ('1', 'hector', 'its a nice one', '1605187099');
```
