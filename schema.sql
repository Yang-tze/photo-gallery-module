DROP DATABASE IF EXISTS photo_gallery;

CREATE DATABASE photo_gallery;

USE photo_gallery;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  detail VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT,
  img_path VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE product_images (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  image_id INT NOT NULL,
  PRIMARY KEY (id)
);

-- INSERT INTO product (name, detail) VALUES ();
INSERT INTO images (img_path) VALUES ("sandisk_16gb_01.jpg"), ("sandisk_16gb_02.jpg");
-- INSERT INTO product_images (product_id, image_id) VALUES ();
