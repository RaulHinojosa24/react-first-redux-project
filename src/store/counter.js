import { createSlice } from "@reduxjs/toolkit";

const inicialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: inicialCounterState,
  reducers: {
    increment(state, action) {
      state.counter += (action || { payload: 1 }).payload;
    },
    decrement(state, action) {
      state.counter -= (action || { payload: 1 }).payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
