const generateRandomNum = (userContext, events, done) => {
  let num = getRandomInt(3000000, 10000001);
  userContext.vars.id = num;
  return done();
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ltrs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];


const generateName = (index, length) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += ltrs[index % 10];
    index = Math.floor(index / 10);
  }
  return result;
};

const generateRandomName = (userContext, events, done) => {
  let index = getRandomInt(3000000, 10000001);
  let name = generateName(index, 7);
  userContext.vars.name = name;
  return done();
}

const generateRandomPost = (userContext, events, done) => {
  let index = getRandomInt(3000000, 10000001);
  let name = generateName(index, 7);
  userContext.vars.name = name;
  userContext.vars.details = 'this is a detail that is kind of long but not actually that long, but long enough';
  return done();
}

module.exports = {
  generateRandomNum,
  generateRandomName,
  generateRandomPost
}