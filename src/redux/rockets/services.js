import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const getData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getData;
