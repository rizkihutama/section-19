import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    counterIncrement: (state) => {
      state.counter += 1;
    },
    counterDecrement: (state) => {
      state.counter -= 1;
    },
    counterIncrementByAmmount: (state, action) => {
      state.counter += action.payload;
    },
    counterToggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const {
  counterIncrement,
  counterDecrement,
  counterIncrementByAmmount,
  counterToggle,
} = counterSlice.actions;

export default counterSlice.reducer;
