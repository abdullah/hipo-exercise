import axios from 'axios';

const send = (url, options) =>
  new Promise((resolve, reject) => {
    axios({
      url,
      ...options,
    })
      .then((res) => {
        if (res.status === 200) {
          resolve({
            data: res.data,
          });
        } else {
          reject({
            error: {
              status: res.status,
              message: res.statusText,
            },
          });
        }
      })
      .catch((err) => {
        const response = err.response;
        reject({
          error: {
            status: response.status || 500,
            message: response.response ? response.response.statusText : '',
          },
        });
      });
  });

export default send;
