import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

createSlice({
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
      state.counter += action.ammount;
    },
    counterToggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/incremented':
      return { counter: state.counter + 1 };
    case 'counter/increase':
      return { counter: state.counter + action.amount };
    case 'counter/toggle':
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    case 'counter/decremented':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
