import {
  CARDAPIO_FETCH_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  pratos: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARDAPIO_FETCH_SUCCESS:
      return { ...state, pratos: action.payload };
    default:
      return state;
  }
};
