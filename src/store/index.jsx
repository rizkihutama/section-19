import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

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
