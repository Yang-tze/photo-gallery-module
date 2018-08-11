CREATE TABLE product_images (
  id int PRIMARY KEY,
  name varchar,
  details varchar,
  images list<varchar>
);

CREATE TABLE product_name (
  name varchar PRIMARY KEY,
  details varchar,
  images list<varchar>
);

COPY product_images(id, name, details, images) FROM './product_images_cassandra.csv' WITH DELIMITER='\t';

