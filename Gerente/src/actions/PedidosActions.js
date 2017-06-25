import axios from 'axios';
import socketClient from 'socket.io-client';
import { Actions } from 'react-native-router-flux';
import {
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  SET_CHECKED_PROP_ITEM_PEDIDO,
  ON_CHECKBOX_CHANGE,
  PUT_PEDIDO_SUCCESS,
  TEM_PEDIDOS_NOVOS,
  SET_FALSE_MESSAGE_BAR,
  FIRST_CONNECTION
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

export const putPedido = (Pedido) => {
  console.log(Pedido);
  return(dispatch) => {
  axios.put('https://me-server.herokuapp.com/pedidos', {
    Id: Pedido.Item.Id,
    Status: 2
  })
  .then((response) => {
    removePedidoDaLista(dispatch, Pedido.Item.Id);
  })
  .catch(error => {
    console.log(error);
  });
  };
};

const removePedidoDaLista = (dispatch, Id) => {
  dispatch({ type: PUT_PEDIDO_SUCCESS, payload: Id });
  Actions.pedidos({ type: 'reset' });
};

export const criaSocket = () => {
  return (dispatch) => {
  const socket = socketClient.connect('https://me-server.herokuapp.com/', { reconnect: true });
    dispatch({ type: FIRST_CONNECTION, payload: false });
    socket.on('cozinha', () => {
      dispatch({ type: TEM_PEDIDOS_NOVOS, payload: true });
    });
  };
};

export const setFalseMessageBar = () => {
  return {
    type: SET_FALSE_MESSAGE_BAR
  };
};
