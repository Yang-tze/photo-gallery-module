/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');

const user = {
  product: {
    name: faker.commerce.product,
  },
};

module.exports = user;
