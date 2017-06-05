import {
  CARDAPIO_FETCH_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  Itens: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARDAPIO_FETCH_SUCCESS:
      return { ...state, Itens: action.payload };
    default:
      return state;
  }
};
