import {
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  SET_CHECKED_PROP_ITEM_PEDIDO,
  ON_CHECKBOX_CHANGE,
  PUT_PEDIDO_SUCCESS,
  TEM_PEDIDOS_NOVOS,
} from '../actions/types';

const INITIAL_STATE = {
  pedidos: [],
  itemPedidos: [],
  itemPedidoProntoDisabled: true,
  temPedidosNovos: false,
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PEDIDOS_CONFIRMADOS_FETCH_SUCCESS:
      return { ...state, pedidos: action.payload, temPedidosNovos: false, loading: false };
    case SET_CHECKED_PROP_ITEM_PEDIDO:
      return { ...state, itemPedidos: action.payload };
    case ON_CHECKBOX_CHANGE:
      return { ...state, 
        itemPedidos: state.itemPedidos.map(itemPedido => itemPedido.Index === action.payload.Index ?
            { ...itemPedido, Checked: !itemPedido.Checked } :
            itemPedido
          )
      };
      case PUT_PEDIDO_SUCCESS:
        return { ...state, pedidos: state.pedidos.filter(pedido => pedido.Id !== action.payload) };
      case TEM_PEDIDOS_NOVOS:
        return { ...state, temPedidosNovos: action.payload };
    default:
      return state;
  }
};
