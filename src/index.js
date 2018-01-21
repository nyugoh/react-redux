import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import App from "./App";

const initialState = {
  score: 5,
  name: "Joe",
  age: 20
};
const mathReducer = (state= initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state, score: state.score + action.payload
      };
      case "SUBTRACT":
      return {
        ...state, score: state.score - action.payload
      };
    default:
      return state;
  }
};

const userReducer = (state= initialState, action) => {
  switch (action.type) {
    case "SET_AGE":
      return {
        ...state, age: action.payload
      };
      case "SET_NAME":
      return {
        ...state, name: action.payload
      };
    default:
      return state;
  }
};

const store = createStore(combineReducers({mathReducer, userReducer}));

// Listen for changes
store.subscribe(() => {
  console.log("Store changed :: ", store.getState());
});

// Dispatch Actions
store.dispatch({
  type: "ADD",
  payload: 5
});
store.dispatch({
  type: "ADD",
  payload: 5
});
store.dispatch({
  type: "SUBTRACT",
  payload: 2
});
store.dispatch({
  type: "SET_NAME",
  payload: "Nyugoh"
});
store.dispatch({
  type: "SET_AGE",
  payload: 22
});


render(<App/>, document.getElementById("root"));
