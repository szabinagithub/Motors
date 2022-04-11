
Create database motorcycles
	Character set utf8
	Collate utf8_hungarian_ci;

-- brands

CREATE TABLE motorcycles.brands (
  id INT(11) NOT NULL AUTO_INCREMENT,
  brandName VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
AUTO_INCREMENT = 3,
AVG_ROW_LENGTH = 8192,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

-- ---------------------------------------------------------------

-- motors
  
  CREATE TABLE motorcycles.motors (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  price INT(11) NOT NULL,
  brandId INT(11) NOT NULL,
  motoVolume INT(11) NOT NULL,
  height INT(11) NOT NULL,
  typeId INT(11) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

ALTER TABLE motorcycles.motors 
  ADD CONSTRAINT FK_motors_brands_id FOREIGN KEY (brandId)
    REFERENCES motorcycles.brands(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE motorcycles.motors 
  ADD CONSTRAINT FK_motors_types_id FOREIGN KEY (typeId)
    REFERENCES motorcycles.types(id) ON DELETE CASCADE ON UPDATE CASCADE;


-- -------------------------------------------------------------

-- types

CREATE TABLE motorcycles.types (
  id INT(11) NOT NULL AUTO_INCREMENT,
  type VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;
 
-- ------------------------------------------------------------

-- users

CREATE TABLE motorcycles.users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  permission VARCHAR(255) NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

-- ----------------------------------------------------------

-- votes
  CREATE TABLE motorcycles.votes (
  id INT(11) NOT NULL AUTO_INCREMENT,
  vote INT(11) NOT NULL,
  userId INT(11) NOT NULL,
  motoId VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB,
CHARACTER SET utf8,
COLLATE utf8_hungarian_ci;

ALTER TABLE motorcycles.votes 
  ADD CONSTRAINT FK_votes_users_id FOREIGN KEY (userId)
    REFERENCES motorcycles.users(id) ON DELETE CASCADE ON UPDATE CASCADE;

-------------------------------------------------------------------------------------------------

-- Data generate
-- brands

Insert into motorcycles.brands 
    (id, brandName) 
  Values 
    (1, 'Suzuki'),
    (2, 'Yamaha'),
    (3, 'Ducati'),
    (4, 'Harley-Davidson'),
    (5, 'Kawasaki'),
    (6, 'KTM'),
    (7, 'Benelli'),
    (8, 'Indian'),
    (9, 'BMW'),
    (10, 'Honda');

-- motors
Insert into motorcycles.motors 
    (id, name, price, brandId, motoVolume, height, typeId) 
  Values 
  (1,'BMW G 310 R', 2130000, 9, 1, 300, 785),
  (2, 'HONDA CB500F', 2289000, 10, 5, 471, 785),
  (3, 'HONDA CBR 125R', 1589000, 10, 5, 125, 776),
  (4, 'INDIAN Chief Dark Horse', 7183000, 8, 6, 1900, 662),
  (5, 'KTM 300 EXC TPI', 3750000, 6, 2, 300, 960),
  (6, 'KTM DUKE 390', 1912000, 6, 5, 370, 830),
  (7, 'SUZUKI GSX 250R', 1669000, 1, 1, 250, 790),
  (8, 'SUZUKI V-STROM 650XT', 2899000, 1, 4, 650, 835),
  (9, 'HARLEY-DAVIDSON Street Bob', 4768521, 4, 6, 1900, 680),
  (10, 'HARLEY-DAVIDSON Fat Boy', 7437435, 4, 3, 1900, 670),
  (11, 'DUCATI Multistrada V4', 7190000, 3, 4, 1200, 850),
  (12, 'DUCATI Panigale V4', 9500000, 3, 1, 1100, 835),
  (13, 'YAMAHA XV 535 (Virago)', 1195000, 2, 3, 535, 775),
  (14, 'KAWASAKI Ninja ZX-6R', 3399000, 5, 1, 640, 820),
  (15, 'BENELLI Leoncino 500 Euro 5', 2270000, 7, 6, 500, 785);

-- types
  Insert into motorcycles.types 
    (id, type) 
  Values 
  (1, 'sport'),
  (2, 'enduro'),
  (3, 'chopper'),
  (4, 'adventure'),
  (5, 'naked'),
  (6, 'cruiser');



-- users
 

-- votes
  


