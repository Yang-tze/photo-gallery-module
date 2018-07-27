/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');

const product = (imgCount = 0, totImg = 0) => {
  var randImg = randImgList(imgCount, totImg);
  return {
    name: faker.commerce.productName(),
    detail: faker.lorem.slug(),
    image: randImg,
  };
};

let randImgList = (imgNum, totImg) => {
  let result = new Set();
  while(result.size < imgNum) {
    result.add(Math.floor(Math.random()*totImg));
  }
  return Array.from(result);
};

module.exports = product;
