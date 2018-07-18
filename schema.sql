DROP DATABASE IF EXISTS photo_gallery;
CREATE DATABASE photo_gallery;

USE photo_gallery;

CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT;
  name VARCHAR(255);
  detail VARCHAR(255);
);

CREATE TABLE images (
  id INT NOT NULL AUTO_INCREMENT;
  img_path VARCHAR(255);
);

CREATE TABLE product_images (
  id INT NOT NULL AUTO_INCREMENT;
  product_id INT NOT NULL;
  image_id INT NOT NULL;
);

INSERT INTO product (name, detail) VALUES ();
INSERT INTO images (img_path) VALUES ();
INSERT INTO product_images (product_id, image_id) VALUES ();
