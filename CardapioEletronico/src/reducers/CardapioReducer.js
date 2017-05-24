import {
  CARDAPIO_FETCH_SUCCESS,
  OBSERVATIONS_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  pratos: [],
  observation: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARDAPIO_FETCH_SUCCESS:
      return { ...state, pratos: action.payload };
    case OBSERVATIONS_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
