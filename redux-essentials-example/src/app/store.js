import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import counterReducerB from '../features/counter/counterSliceB';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counterB: counterReducerB,
  },
});
