import {
  MESA_FETCH_SUCCESS,
  ON_MESA_NUM_CHANGE,
  SELECIONA_MESA,
  SELECIONA_MESA_SUCCESS,
  SELECIONA_MESA_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  mesas: [],
  mesaNum: 0,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MESA_FETCH_SUCCESS:
      return { ...state, mesas: action.payload };
    case ON_MESA_NUM_CHANGE:
      return { ...state, mesaNum: action.payload };
    case SELECIONA_MESA:
      return { ...state, loading: true };
    case SELECIONA_MESA_SUCCESS:
      return { ...state, loading: false };
    case SELECIONA_MESA_FAIL:
      return { ...state, loading: false };
    default:
      return state; 
  }
};
