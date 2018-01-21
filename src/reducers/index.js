import {SET_NAME, SET_AGE} from '../constants/action-types'

const initialState = {
  data: {
    score: 1,
    name: "Joe",
    age: 21,
    friends: []
  }
};

export const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { data: {
          ...state.data,
          name: action.payload
        }
      };
    case SET_AGE:
      return { data: {
          ...state.data,
          age: action.payload
        }
      };
    default:
      return state;
  }
};

export const friendReducer = (state=initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

