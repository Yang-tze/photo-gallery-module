const { Pool } = require('pg');

const connection = {
  user: 'duss',
  host: 'localhost',
  database: 'SDC-photo-gallery',
  password: '',
  port: 5432,
}

const pool = new Pool(connection);


// const getProductInfo = (id, cb) => {
//   let query = `select name, details from products where id = $1`
//   if (isNaN(id)) {
//     query = `select name, details from products where name = $1`
//   }
//   pool.query(query, [id])
//     .then(res => cb(res))
//     .catch(err => console.log(err))
// };

const getProductInfo = (id, cb) => {
  let query = `select products.name, products.details, product_images.img_url from products inner join product_images on product_images.product_id = products.id where products.id = $1`;
  if (isNaN(id)) {
    query = `select products.name, products.details, product_images.img_url from products inner join product_images on product_images.product_id = products.id where products.name = $1`;
  }
  pool.query(query, [id])
    .then(res => cb(res))
    .catch(err => console.log(err))
};

// const getImages = (id, cb) => {
//   let query = `select img_url from product_images where product_images.product_id = $1`;
//   if (isNaN(id)) {
//     query = `select img_url from product_images pi inner join products on pi.product_id = products.id where products.name = $1`;
//   }
//   pool.query(query, [id])
//     .then(res => cb(res))
//     .catch(err => console.log(err))
// };

const addProduct = (params, cb) => {
  let values = [params.name, params.details];
  let query = `insert into products (name, details) values ($1, $2) returning *`;
  pool.query(query, values)
    .then(res => cb(res))
    .catch(err => console.log(err))
};

const addImage = (params, cb) => {
  let values = [params.product_id, params.img_url];
  let query = `insert into product_images (product_id, img_url) values ($1, $2) returning *`;
  pool.query(query, values)
    .then(res => cb(res))
    .catch(err => console.log(err))
};

const updateProduct = (params, cb) => {
  let values = [params.name, params.details];
  let query = `update products set details = $2 where name = $1 returning *`;
  pool.query(query, values)
    .then(res => cb(res))
    .catch(err => console.log(err))
};

const deleteProduct = (params, cb) => {
  let values = [params.name]
  let query = `delete from products where name = $1 returning *`;
  pool.query(query, values)
    .then(res => cb(res))
    .catch(err => console.log(err))
};

module.exports = {
  getProductInfo,
  // getImages,
  addProduct,
  addImage,
  updateProduct,
  deleteProduct
}
