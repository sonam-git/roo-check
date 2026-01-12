import { configureStore } from '@reduxjs/toolkit';
import clanReducer from './clanSlice';

export const store = configureStore({
  reducer: {
    clan: clanReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
