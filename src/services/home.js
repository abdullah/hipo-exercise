import { clientId, clientSecret } from './config';
import send from './mixin';

const url = 'https://api.foursquare.com/v2/venues/explore';
const searchPlace = data =>
  send(url, {
    method: 'GET',
    params: {
      client_id: clientId,
      client_secret: clientSecret,
      v: '20171201',
      venuePhotos: 1,
      limit: 10,
      ...data,
    },
  });

export default searchPlace;
