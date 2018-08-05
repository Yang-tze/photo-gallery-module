const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'photo_gallery_db',
  user: 'root',
  password: 'root',
  database: 'photo_gallery',
});

const getImages = (id, cb) => {
  connection.query(`select i.img_path from images i inner join product_images pi where i.id = pi.image_id and pi.product_id = ${id}`, (err, result) => {
    if (err) console.log(err);
    cb(result);
  });
};

const getProductInfo = (id, cb) => {
  connection.query(`select name, detail from products where id = ${id}`, (err, result) => {
    if (err) console.log(err);
    cb(result);
  });
};

module.exports = {
  getImages,
  getProductInfo,
};
