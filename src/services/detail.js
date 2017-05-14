/* eslint-disable */
import axios from "axios";
import { clientId, clientSecret, apiUrl } from "./config";

const url = "https://api.foursquare.com/v2/venues";
const getVenue = id => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/${id}`,
      method: "GET",
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        v: "20171201",
        venuePhotos: 1
      }
    })
      .then(res => {
        if (res.status === 200) {
          resolve({
            data: res.data
          });
        } else {
          reject({
            error: {
              status: res.status,
              message: res.statusText
            }
          });
        }
      })
      .catch(err => {
        const response = err.response;
        reject({
          error: {
            status: response.status || 500,
            message: response.response ? response.response.statusText : ""
          }
        });
      });
  });
};

export { getVenue };
