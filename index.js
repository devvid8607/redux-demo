//creating a redux store
const redux = require("redux");
import { configureStore } from "@reduxjs/toolkit";
const createStore = redux.configureStore();

//creating an action and actioncreator function
const CAKE_ORDERED = "CAKE_ORDERED";

function orderCake() {
  //action creator function
  return {
    type: CAKE_ORDERED, //action
    quantity: 1,
  };
}

const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = configureStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(orderCake());

unsubscribe();
