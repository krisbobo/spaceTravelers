// import axios from 'axios';

// const baseURL = 'https://api.spacexdata.com/v4/missions';

const missions = [
  {
    mission_id: 1,
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the king of Thailand, His Majesty the King Bhumiwad Bhumibol Adulyadej, in recognition of the contributions of the Thai people to the development of the satellite industry.',
    status: 'NOT A MEMBER',
    membership: 'Join Mission',
  },
  {
    mission_id: 2,
    mission_name: 'SpaceX',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the king of Thailand, His Majesty the King Bhumiwad Bhumibol Adulyadej, in recognition of the contributions of the Thai people to the development of the satellite industry.',
    status: 'ACTIVE MEMBER',
    membership: 'Leave Mission',
  },
  {
    mission_id: 3,
    mission_name: 'Telstar',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the king of Thailand, His Majesty the King Bhumiwad Bhumibol Adulyadej, in recognition of the contributions of the Thai people to the development of the satellite industry.',
    status: 'NOT A MEMBER',
    membership: 'Join Mission',
  },
];

const fetchMissions = async () => {
  try {
    // const response = await axios.get(baseURL);
    return missions;
  } catch (error) {
    return error;
  }
};

export default fetchMissions;
