import axios from 'axios';

const baseURL = 'https://api.spacexdata.com/v4/dragons';

const fetchDragons = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default fetchDragons;
