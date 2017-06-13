import axios from 'axios';
import {
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  SET_CHECKED_PROP_ITEM_PEDIDO,
  ON_CHECKBOX_CHANGE
} from './types';


export const pedidosFetch = () => {
  return (dispatch) => {
    axios.get('https://me-server.herokuapp.com/pedidos')
    .then(response => {
      dispatch({ type: PEDIDOS_CONFIRMADOS_FETCH_SUCCESS, payload: response.data });
    });
  };
};

export const setCheckedPropToItemPedido = (ListItemPedidos) => {
  const ListItemPedidosChecked = [];
  ListItemPedidos.forEach(Item => {
    ListItemPedidosChecked.push(Object.assign({}, Item, { Checked: false }, { Index: ListItemPedidos.indexOf(Item) }));
  });
  return {
    type: SET_CHECKED_PROP_ITEM_PEDIDO,
    payload: ListItemPedidosChecked
  };
};

export const onCheckboxChange = (ItemPedido) => {
  return {
    type: ON_CHECKBOX_CHANGE,
    payload: ItemPedido
  };
};

export const postPedido = (Pedido) => {
  console.log(Pedido);
};
