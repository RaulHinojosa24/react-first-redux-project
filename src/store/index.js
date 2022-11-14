import redux from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action === "decrement") {
    return {
      counter: state.counter + 1,
    };
  }

  return state;
};

const store = redux.legacy_createStore(counterReducer);

export default store;
