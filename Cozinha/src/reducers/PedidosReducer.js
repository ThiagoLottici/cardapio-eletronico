import {
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  SET_CHECKED_PROP_ITEM_PEDIDO,
  ON_CHECKBOX_CHANGE,
  FINALIZA_PEDIDO
} from '../actions/types';

const INITIAL_STATE = {
  pedidos: [],
  itemPedidos: [],
  itemPedidoProntoDisabled: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PEDIDOS_CONFIRMADOS_FETCH_SUCCESS:
      return { ...state, pedidos: action.payload };
    case SET_CHECKED_PROP_ITEM_PEDIDO:
      return { ...state, itemPedidos: action.payload };
    case ON_CHECKBOX_CHANGE:
      return { ...state, 
        itemPedidos: state.itemPedidos.map(itemPedido => itemPedido.Index === action.payload.Index ?
            { ...itemPedido, Checked: !itemPedido.Checked } :
            itemPedido
          )
      };
      case FINALIZA_PEDIDO:

    default:
      return state;
  }
};
