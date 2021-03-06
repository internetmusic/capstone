# capstone

## MYSQL COMMANDS

### Create Database 
```
create database guestbook
```

### Create Table guests
```
CREATE TABLE `guestbook`.`guests` (
  `guest id` INT(11) NOT NULL AUTO_INCREMENT,
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

# Node APP - API's

### set up db configuration in the `config/db.config.js`
```
module.exports = {
  HOST: "localhost", // Your IP address
  USER: "root", // Your MYSQL /  DB user Name
  PASSWORD: "admin", // Your DB password
  DB: "guestbook" // Your database name
};
```

### To run the application 
```
cd app
npm i
node index.js
```
## API's

#### Create Guest Records

```
url: http://localhost:8000/create`

type: Post

Input:

{
    "guestid":"3", 
    "name":"JASON",
    "message":"Nice to meet you",
    "time":"1605191858",
    "email": "test2@gmail.com"
  }
```

```
Output:

{
  "id": 0,
  "guestid": "3",
  "name": "JASON",
  "message": "Nice to meet you",
  "time": "1605191858",
  "email": "test2@gmail.com"
}
```

#### Get guests list 

```
url: http://localhost:8000/guests`

type: Get

Input: NONE

```

```
Output:
[
  {
    "guestid": 1,
    "name": "hector",
    "message": "its a nice one",
    "time": 1605187099,
    "email": "test@gmail.com"
  },
  {
    "guestid": 2,
    "name": "Highway 37",
    "message": "Spent a lot of time",
    "time": 1605191858,
    "email": "test1@gmail.com"
  },
  {
    "guestid": 3,
    "name": "JASON",
    "message": "Nice to meet you",
    "time": 1605191858,
    "email": "test2@gmail.com"
  }
]
```
# React APP - Frontend

## To run the frontend application
```
cd frontend
npm i
npm run start
```
##### Frontend app will be hosted on `http://localhost:3000`


# Docker
### To run backend app
```
git clone https://github.com/sriharikapu/capstone.git
cd capstone
cd app
sudo docker build -t "backendapp:Dockerfile"
```
### To run frontend app
```
cd capstone
cd frontend
sudo docker build -t "frontendapp:Dockerfile"
```



