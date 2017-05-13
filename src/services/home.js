/* eslint-disable */
import axios from "axios";
import { clientId, clientSecret, apiUrl } from "./config";

const searchPlace = data => {
  return axios.get(data);
};

export { searchPlace };
