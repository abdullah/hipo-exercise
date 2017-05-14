import { clientId, clientSecret } from './config';
import send from './mixin';

const url = 'https://api.foursquare.com/v2/venues';
const getVenue = id =>
  send(`${url}/${id}`, {
    method: 'GET',
    params: {
      client_id: clientId,
      client_secret: clientSecret,
      v: '20171201',
      venuePhotos: 1,
    },
  });

export default getVenue;
