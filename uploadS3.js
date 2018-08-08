const fetch = require('node-fetch');
const AWS = require('aws-sdk');
const faker = require('faker');

const s3 = new AWS.S3();

const uploadImg = (img, name) => {
  fetch(img)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      return Promise.reject(new Error(
            `Failed to fetch ${response.url}: ${response.status} ${response.statusText}`));
    })
    .then(response => response.buffer())
    .then(buffer => (
      s3.putObject({
        Bucket: 'system-design-capstone',
        Key: name,
        Body: buffer,
      }).promise()
    ))
};

const uploadAll = () => {
    for (let i = 400; i < 501; i++) {
        let img = faker.image.food();
        uploadImg(img, `${i}.jpg`);
    }
}

uploadAll();