import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppSliceStateProp, ENV } from '../interfaces';

const initialState: AppSliceStateProp = {
    ENV: 'dev',
    SHOW_TOAST: false,
    TOAST_MESSAGE: '',
};

const AppSlice = createSlice({
    name: 'APP_REDUCER',
    initialState,
    reducers: {
        setEnv: (state: AppSliceStateProp, action: PayloadAction<ENV>) => {
            state.ENV = action.payload;
        },
        setToast: (
            state: AppSliceStateProp,
            action: PayloadAction<{ SHOW_TOAST: boolean; TOAST_MESSAGE: string }>,
        ) => {
            state.SHOW_TOAST = action.payload.SHOW_TOAST;
            state.TOAST_MESSAGE = action.payload.TOAST_MESSAGE;
        },
    },
});

// Action creators are generated for each case reducer function
const { setEnv, setToast } = AppSlice.actions;
const APP_REDUCER = AppSlice.reducer;

export { APP_REDUCER, setEnv, setToast };
