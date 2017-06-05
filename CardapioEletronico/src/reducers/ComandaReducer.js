import {
  REGISTRA_PEDIDO_COMANDA,
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  SELECIONA_MESA_SUCCESS,
  ATUALIZA_PEDIDOS_CONFIRMADOS
} from '../actions/types';

const INITIAL_STATE = {
  pedidosNaoConfirmados: [],
  pedidosConfirmados: [],
  Id: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRA_PEDIDO_COMANDA:
      //return { ...state, pedidosNaoConfirmados: [...state.pedidosNaoConfirmados, action.payload] };
      return { ...state, pedidosNaoConfirmados: action.payload };
    case PEDIDOS_CONFIRMADOS_FETCH_SUCCESS:
      return { ...state, pedidosConfirmados: action.payload };
    case SELECIONA_MESA_SUCCESS:
      return { ...state, Id: action.payload.Mesa };
    case ATUALIZA_PEDIDOS_CONFIRMADOS:
      debugger;
      return { ...state, pedidosConfirmados: action.payload.ItemPedidos, pedidosNaoConfirmados: [] };
    default:
      return state;
  }
};
