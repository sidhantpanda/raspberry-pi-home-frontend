
const handleError = (response) => {
  if (response.status !== 200) {
    throw Error('Error');
  }
  return response;
}

const fetchCurrentStatus = () => {
  return new Promise((resolve, reject) => {
    const url = '/api/controls/status';
    fetch(url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then(handleError)
      .then(resp => resp.json())
      .then(function (data) {
        resolve(data.buttons);
      })
      .catch(err => {
        reject(err);
      });


    // setTimeout(() => {
    //   resolve({
    //     buttons: [
    //       {
    //         id: 'button1',
    //         label: 'Yellow Light',
    //         status: false,
    //         color: 'yellow',
    //       },
    //       {
    //         id: 'button2',
    //         label: 'Fan',
    //         status: true,
    //         color: 'teal',
    //       }
    //     ]
    //   });
    // }, 500);
  })
}


const setStatus = (buttonId, status) => {
  console.log('status in api: ', status);
  return new Promise((resolve, reject) => {
    const url = '/api/controls/status/' + buttonId;
    fetch(url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ status: status })
      })
      .then(handleError)
      .then(resp => resp.json())
      .then(function (data) {
        resolve(data.buttonData);
      })
      .catch(err => {
        reject(err);
      });


    // setTimeout(() => {
    //   resolve({
    //     buttonData: {
    //       id: buttonId,
    //       // label: 'Yellow Light',
    //       status: status,
    //     }
    //   });
    //   // reject();
    // }, 500);
  });
}

export { fetchCurrentStatus, setStatus };