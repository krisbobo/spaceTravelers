import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missions';
import dragonReducer from './dragons/dragons';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
    dragons: dragonReducer,
  },
});
export default store;
