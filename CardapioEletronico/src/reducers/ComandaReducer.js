import {
  REGISTRA_PEDIDO_COMANDA,
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  SELECIONA_MESA_SUCCESS,
  ATUALIZA_PEDIDOS_CONFIRMADOS,
  REMOVE_ITEM_FROM_PEDIDOS_NAO_CONFIRMADOS
} from '../actions/types';

const INITIAL_STATE = {
  pedidosNaoConfirmados: [],
  pedidosConfirmados: [],
  comanda: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRA_PEDIDO_COMANDA:
      const pedidosNaoConfirmadosAtualizado = [...state.pedidosNaoConfirmados, ...action.payload];
      for (let i = 0; i < pedidosNaoConfirmadosAtualizado.length; ++i) {
        pedidosNaoConfirmadosAtualizado[i].Id = i;
      }
      return { ...state, pedidosNaoConfirmados: pedidosNaoConfirmadosAtualizado };
    case PEDIDOS_CONFIRMADOS_FETCH_SUCCESS:
      return { ...state, pedidosConfirmados: [...state.pedidosConfirmados, ...action.payload] };
    case SELECIONA_MESA_SUCCESS:
      return { ...state, comanda: action.payload, pedidosConfirmados: action.payload.Pedidos };
    case ATUALIZA_PEDIDOS_CONFIRMADOS:
      return { ...state, pedidosConfirmados: [...state.pedidosConfirmados, ...action.payload.ItemPedidos], pedidosNaoConfirmados: [] };
    case REMOVE_ITEM_FROM_PEDIDOS_NAO_CONFIRMADOS:
      debugger;
      return { ...state, pedidosNaoConfirmados: state.pedidosNaoConfirmados.filter(item => item.Id !== action.payload) };
    default:
      return state;
  }
};
