import axios from 'axios';
import socketClient from 'socket.io-client';
import { Actions } from 'react-native-router-flux';
import {
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  CREATE_ITEM_LIST,
  TEM_PEDIDOS_NOVOS,
  SET_FALSE_MESSAGE_BAR,
  FIRST_CONNECTION,
  ATUALIZA_VALOR_COMANDA
} from './types';

export const pedidosFetch = () => {
  return (dispatch) => {
    axios.get('https://me-server.herokuapp.com/comandas')
    .then(response => {
      dispatch({ type: PEDIDOS_CONFIRMADOS_FETCH_SUCCESS, payload: response.data });
    });
  };
};

export const createItemList = (Pedidos) => {
  const ItemList = [];
  let totalPreco = 0;
      Pedidos.forEach(value => {
          value.ItemPedidos.forEach(valueItemPedidos => {
              ItemList.push(Object.assign({}, valueItemPedidos.Item));
              totalPreco += valueItemPedidos.Item.Preco;
      });
    });
  return (dispatch) => {
   dispatch({ type: ATUALIZA_VALOR_COMANDA, payload: totalPreco });
   dispatch({ type: CREATE_ITEM_LIST, payload: ItemList });
  };
};

export const criaSocket = () => {
  return (dispatch) => {
  const socket = socketClient.connect('https://me-server.herokuapp.com/', { reconnect: true });
    dispatch({ type: FIRST_CONNECTION, payload: false });
    socket.on('gerente', () => {
      dispatch({ type: TEM_PEDIDOS_NOVOS, payload: true });
    });
  };
};

export const setFalseMessageBar = () => {
  return {
    type: SET_FALSE_MESSAGE_BAR
  };
};
