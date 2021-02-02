import axios from 'axios';

// eslint-disable-next-line camelcase
const api_key = 'HoIHeelTcHrpZe94lpCnhablqrEEOe2XGq9IR0YW';

const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?',
  params: {
    api_key,
    sol: 10,
  },
});

const localApi = axios.create({
  baseURL: 'http://localhost:3333',
});

export { nasaApi, localApi };
