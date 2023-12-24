import * as ActionTypes from '../ActionTypes';
import { AppStateProp } from '../../Interfaces';

const initialState: AppStateProp = {
};

const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      state = state;
      break;
  }
  return state;
};

export { AppReducer };
