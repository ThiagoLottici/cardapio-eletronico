import {
  REGISTRA_PEDIDO_COMANDA,
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  SELECIONA_MESA_SUCCESS,
  ATUALIZA_PEDIDOS_CONFIRMADOS,
  REMOVE_ITEM_FROM_PEDIDOS_NAO_CONFIRMADOS,
  ATUALIZA_VALOR_PARCIAL_COMANDA
} from '../actions/types';

const INITIAL_STATE = {
  pedidosNaoConfirmados: [],
  pedidosConfirmados: [],
  comanda: '',
  totalPedidos: 0,
  totalPedidosNaoConfirmados: 0
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
      return { ...state, pedidosConfirmados: [...state.pedidosConfirmados, ...action.payload.ItemPedidos], pedidosNaoConfirmados: [], totalPedidosNaoConfirmados: 0 };
    case REMOVE_ITEM_FROM_PEDIDOS_NAO_CONFIRMADOS:
      return { ...state, pedidosNaoConfirmados: state.pedidosNaoConfirmados.filter(item => item.Id !== action.payload.Id), totalPedidosNaoConfirmados: parseFloat((state.totalPedidosNaoConfirmados - action.payload.Item.Preco).toFixed(2)), totalPedidos: parseFloat((state.totalPedidos - action.payload.Item.Preco).toFixed(2)) };
    case ATUALIZA_VALOR_PARCIAL_COMANDA:
      return { ...state, totalPedidosNaoConfirmados: parseFloat((state.totalPedidosNaoConfirmados + action.payload).toFixed(2)), totalPedidos: parseFloat((state.totalPedidos + action.payload).toFixed(2)) };
    default:
      return state;
  }
};
