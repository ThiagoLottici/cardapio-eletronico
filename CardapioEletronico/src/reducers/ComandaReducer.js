import {
  REGISTRA_PEDIDO_COMANDA
} from '../actions/types';

const INITIAL_STATE = {
  comanda: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRA_PEDIDO_COMANDA:
      return { ...state, comanda: [...state.comanda, action.payload] };
    default:
      return state;
  }
};
