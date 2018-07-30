let fakeData = [];

const getFakeData = () => {
  $.post('/faker', (data) => {
    console.log(data);
  });
};


getFakeData();
