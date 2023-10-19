import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    counterIncrement(state) {
      state.counter += 1;
    },
    counterDecrement(state) {
      state.counter -= 1;
    },
    counterIncrementByAmmount(state, action) {
      state.counter += action.payload;
    },
    counterToggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export { store };

export const {
  counterIncrement,
  counterDecrement,
  counterIncrementByAmmount,
  counterToggle,
} = counterSlice.actions;
