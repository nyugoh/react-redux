// Root reducer
import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
  articles: []
};

/**
 * Takes a state and an action which is mapped to an action type and returns the updated state
 * @param state
 * @param action
 * @returns {state}
 */

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state, articles: [ ...state.articles, action.payload ]
      };
    default:
      return state;
  }
};

export default rootReducer;