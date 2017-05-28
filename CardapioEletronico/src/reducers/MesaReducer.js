import {
  MESA_FETCH_SUCCESS,
  ON_MESA_NUM_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
  mesas: [],
  mesaNum: 0
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MESA_FETCH_SUCCESS:
      return { ...state, mesas: action.payload };
    case ON_MESA_NUM_CHANGE:
      return { ...state, mesaNum: action.payload }
    default:
      return state; 
  }
};