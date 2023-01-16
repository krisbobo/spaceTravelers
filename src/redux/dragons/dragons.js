import { createAsyncThunk } from '@reduxjs/toolkit';
import getData from './fetch';

const GET_DRAGONS = 'Dragons/Dragons/GET_DRAGONS';
const BOOK_DRAGONS = 'Dragons/Dragons/BOOK_DRAGONS';
const CANCEL_BOOKED_DRAGONS = 'Dragons/Dragons/CANCEL_BOOKED_DRAGONS';

const initialState = {
  dragons: [],
};

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_DRAGONS}/fulfilled`:
      return {
        ...state,
        dragons: action.payload,
      };
    case `${BOOK_DRAGONS}/fulfilled`:
      return {
        ...state,
        dragons: state.dragons.map((dragon) => {
          if (dragon.id !== action.payload) {
            return dragon;
          }
          return { ...dragon, reserved: true };
        }),
      };
    case `${CANCEL_BOOKED_DRAGONS}/fulfilled`:
      return {
        ...state,
        dragons: state.dragons.map((dragon) => {
          if (dragon.id !== action.payload) {
            return dragon;
          }
          return { ...dragon, reserved: false };
        }),
      };

    default:
      return state;
  }
};

export const getDragons = createAsyncThunk(GET_DRAGONS, async (dragonsData) => {
  const data = dragonsData.length === 0 ? await getData() : dragonsData;
  const dragons = [];

  data.forEach((data) => {
    dragons.push(data);
  });

  return dragons;
});

export const bookDragons = createAsyncThunk(BOOK_DRAGONS, async (id) => id);

export const cancelDragons = createAsyncThunk(CANCEL_BOOKED_DRAGONS, async (id) => id);

export default dragonReducer;
