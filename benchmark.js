const siege = require('siege');

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomId = () => {
  let num = getRandomInt(3000000, 10000001);
  return num;
}

const ltrs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

const generateName = (index, length) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += ltrs[index % 10];
    index = Math.floor(index / 10);
  }
  return result;
};

const generateRandomName = () => {
  let index = getRandomInt(3000000, 10000001);
  let name = generateName(index, 7);
  return name;
};

let tester = siege().concurrent(40).on(3002);

for (let i = 0; i < 100000; i++) {
  let id = generateRandomName();
  tester = tester.for(1).times.get(`/images/${id}/product_info`)
};


tester.attack();