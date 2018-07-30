const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'photo_gallery'
});

const getImages = (id, cb) => {
  connection.query(`select i.img_path from images i inner join product_images pi where i.id = pi.image_id and pi.product_id = ${id}`, (err, result, fields) => {
    if (err) console.log(err);
    cb(result);
  });
}

module.exports = {
  getImages
};
