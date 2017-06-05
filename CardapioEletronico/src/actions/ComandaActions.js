import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
  REGISTRA_PEDIDO_COMANDA,
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  ATUALIZA_PEDIDOS_CONFIRMADOS
} from './types';

export const registrarItemPedidoComanda = (ItemPedido) => {
  const ItemPedidos = [];
  for (var index = 0; index < ItemPedido.Quantidade; index++) {
    ItemPedidos.push(ItemPedido);
  }
  return {
    type: REGISTRA_PEDIDO_COMANDA,
    payload: ItemPedidos
  };
};

export const pedidosConfirmadosFetch = () => {
  return (dispatch) => {
    axios.get('https://me-server.herokuapp.com/pedidos')
    .then(response => {
      console.log(response);
      dispatch({ type: PEDIDOS_CONFIRMADOS_FETCH_SUCCESS, payload: response.data.ItemPedidos });
    });
  };
};

export const postPedido = (comanda) => {
  var pedidosNaoConfirmadosId = [];
  comanda.pedidosNaoConfirmados.forEach(value => {
    pedidosNaoConfirmadosId.push({ 'Item': value.Item.Id, 'Obs': value.Obs });
  });
  debugger;
  return (dispatch) => {
    axios.post('https://me-server.herokuapp.com/pedidos/novo', {
    //axios.post('http://192.168.0.7:3000/pedidos/novo', {
      IdComanda: comanda.Id,
      ItemPedidos: pedidosNaoConfirmadosId
    })
    .then(response => atualizaPedidosConfirmados(dispatch, response))
    .catch((error) => {
      console.log(error);
    });
  };
};

const atualizaPedidosConfirmados = (dispatch, response) => {
  debugger;
  dispatch({
    type: ATUALIZA_PEDIDOS_CONFIRMADOS,
    payload: response.data
  });
};
