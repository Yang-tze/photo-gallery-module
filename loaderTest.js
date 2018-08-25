const request = require('request');

const testId = '2d19dbf81d27836db651ca59afdf5d50';
const apiKey = 'f07ce4f7228c3ed72ab979c5f6a27325';

const startOps = {
  url: `https://api.loader.io/v2/tests/${testId}/run`,
  headers: {
    'loaderio-auth': apiKey,
  },
};

const stopOps = {
  url: `https://api.loader.io/v2/tests/${testId}/stop`,
  headers: {
    'loaderio-auth': apiKey,
  },
};

const runTest = () => {
  request.put(startOps, (err, res) => {
    if (err) {
      console.log('runTest error:', err);
    } else {
      console.log('runTest success', res.body);
      setTimeout(stopTest, 60000);
    }
  })
}

const stopTest = () => {
  request.put(stopOps, (err, res) => {
    if (err) {
      console.log('stopTest error:', err);
    } else {
      console.log('stopTest success');
      setTimeout(runTest, 5000);
    }
  });
}

runTest();