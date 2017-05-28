import {
  REGISTRA_PEDIDO_COMANDA
} from '../actions/types';

const INITIAL_STATE = {
  pedidosList: []  //pedidos
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRA_PEDIDO_COMANDA:
      return { ...state, pedidosList: [...state.pedidosList, action.payload] };
    default:
      return state;
  }
};
