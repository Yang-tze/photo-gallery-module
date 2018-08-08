const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
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

const addProduct = (params, cb) => {
  console.log(params);
  connection.query(`insert into products (name, detail) values ('${params.product}', '${params.details}')`, (err, result) => {
    if (err) {
      console.log(err);
      console.log('failed to post');
    } else {
      console.log('posted info!');
      cb(result);
    }
  });
};

const updateProduct = (params, cb) => {
  connection.query(`update products set detail = ${params.detail} where name = ${params.product} `, (err, result) => {
    if (err) {
      console.log('failed to update product');
    } else {
      cb(result);
    }
  });
};

const deleteProduct = (params, cb) => {
  connection.query(`delete from products where product.name = ${params.product}`, (err, result) => {
    if (err) {
      console.log('failed to delete product');
    } else {
      cb(results);
    }
  });
};

module.exports = {
  getImages,
  getProductInfo,
  addProduct,
  updateProduct,
  deleteProduct
};
