import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchMissions from './fetch';

const GET_MISSIONS = 'Missions/Missions/GET_MISSIONS';
const JOIN_MISSIONS = 'Missions/Missions/JOIN_MISSIONS';
const EXIT_MISSIONS = 'Missions/Missions/EXIT_MISSIONS';

const initialState = {
  missions: [],
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`:
      return {
        ...state,
        missions: action.payload,
      };
    case `${JOIN_MISSIONS}/fulfilled`:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id !== action.payload) {
            return mission;
          }
          return { ...mission, reserved: true };
        }),
      };
    case `${EXIT_MISSIONS}/fulfilled`:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id !== action.payload) {
            return mission;
          }
          return { ...mission, reserved: false };
        }),
      };

    default:
      return state;
  }
};

export const getMissions = createAsyncThunk(GET_MISSIONS, async (missionsData) => {
  const data = missionsData.length === 0 ? await fetchMissions() : missionsData;
  const missions = [];

  data.forEach((data) => {
    missions.push(data);
  });

  return missions;
});

export const joinMissions = createAsyncThunk(JOIN_MISSIONS, async (id) => id);
export const exitMissions = createAsyncThunk(EXIT_MISSIONS, async (id) => id);

export default missionReducer;
