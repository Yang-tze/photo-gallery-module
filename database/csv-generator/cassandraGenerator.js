const path = require('path');
const fakerSchema = require('./faker-schema.js');
const fs = require('fs');

const spl = '\t';

const ltrs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const generateName = (index, length) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += ltrs[index % 10];
    index = Math.floor(index / 10);
  }
  return result;
};

const generateData = () => {
    let data = [];
    const imgLen = 500;
    const maxImg = 6;
    for(var i = 0; i < 10000000; i++) {
      let product = generateName(i, 7);
      data.push(fakerSchema(maxImg, imgLen, product));
    }
    fs.writeFile(path.join(__dirname,'./product_images_cassandra2.csv'), writeTSV(data), 'utf8', (err) => {
      if (err) throw err;
      console.log('The products file has been saved!');
    });
    // fs.writeFile(path.join(__dirname,'./images_id.csv'), getProductImages(data), 'utf8', (err) => {
    //   if (err) throw err;
    //   console.log('The images file has been saved!');
    // });
    // fs.writeFile(path.join(__dirname,'../images.csv'), getImages(imgLen), 'utf8', (err) => {
    //   if (err) throw err;
    //   console.log('The images file has been saved!');
    // });
  };
  
//   const writeTSV = (data) => {
//     let result = "";
//     for(var i in data) {
//       let arr = [];
//       for(var key in data[i]) {
//         if(key !== 'image') {
//           arr.push(data[i][key]);
//         } else {
//           arr.push('[' + (data[i][key] + ']'));
//         }
//       }
//       result += (JSON.parse(i)+1)+spl+arr.join(spl)+'\n';
//     }
//     return result;
//   };

  const writeTSV = (data) => {
    let result = "";
    for(var i in data) {
      let arr = [];
      for(var key in data[i]) {
        if(key !== 'image') {
          arr.push(data[i][key]);
        } else {
          arr.push('[' + (data[i][key] + ']'));
        }
      }
      result += arr.join(spl)+'\n';
    }
    return result;
  };
  
//   const getProductImages = (data) => {
//     let result = "";
//     let count = 1;
//     for(var i in data) {
//       for(var img of data[i]['image']) {
//         let arr = [JSON.parse(i)+1, img + '.jpg'];
//         result += (count++)+spl+arr.join(spl)+'\n';
//       }
//     }
//     return result;
//   }
  
//   const getImages = (totImages) => {
//     let result = "";
//     for(var i = 1; i <= totImages; i++) {
//       result += i+spl+`${i}.jpg\n`;
//     }
//     return result;
//   }

//   const createTSV = () => {

//   }

generateData();


  