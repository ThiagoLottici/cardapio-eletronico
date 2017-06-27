import {
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  CREATE_ITEM_LIST,
  ON_CHECKBOX_CHANGE,
  PUT_PEDIDO_SUCCESS,
  TEM_PEDIDOS_NOVOS,
  SET_FALSE_MESSAGE_BAR,
  FIRST_CONNECTION,
  ATUALIZA_VALOR_COMANDA
} from '../actions/types';

const INITIAL_STATE = {
  pedidos: [],
  itemPedidos: [],
  itemPedidoProntoDisabled: true,
  temPedidosNovos: false,
  loading: true,
  messageBarPedidoFinalizado: false,
  firstConnection: true,
  totalPedidos: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PEDIDOS_CONFIRMADOS_FETCH_SUCCESS:
      return { ...state, pedidos: action.payload, temPedidosNovos: false, loading: false };
    case CREATE_ITEM_LIST:
      return { ...state, itemPedidos: action.payload };
      case PUT_PEDIDO_SUCCESS:
        return { ...state, pedidos: state.pedidos.filter(pedido => pedido.Id !== action.payload), messageBarPedidoFinalizado: true };
      case TEM_PEDIDOS_NOVOS:
        return { ...state, temPedidosNovos: action.payload };
      case SET_FALSE_MESSAGE_BAR:
        return { ...state, messageBarPedidoFinalizado: false };
      case FIRST_CONNECTION:
        return { ...state, firstConnection: false };
      case ATUALIZA_VALOR_COMANDA:
        return { ...state, totalPedidos: action.payload };
    default:
      return state;
  }
};
