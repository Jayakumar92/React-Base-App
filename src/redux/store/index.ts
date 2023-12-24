import { configureStore } from '@reduxjs/toolkit';
import { APP_REDUCER } from '@redux';

const store = configureStore({
  reducer: { APP_REDUCER },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };