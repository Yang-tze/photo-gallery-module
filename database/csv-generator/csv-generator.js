const fakeData = [];

const getFakeData = () => {
  $.get('/faker', (data) => {
    console.log(data);
  });
};

getFakeData();
