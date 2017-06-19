import axios from 'axios';
import {
  REGISTRA_PEDIDO_COMANDA,
  PEDIDOS_CONFIRMADOS_FETCH_SUCCESS,
  ATUALIZA_PEDIDOS_CONFIRMADOS,
  REMOVE_ITEM_FROM_PEDIDOS_NAO_CONFIRMADOS,
  ATUALIZA_VALOR_TOTAL_COMANDA,
  ATUALIZA_VALOR_PARCIAL_COMANDA
} from './types';

export const registrarItemPedidoComanda = (ItemPedido) => {
  const ItemPedidos = [];
  let totalPrecoPedidos = 0;
  for (var index = 0; index < ItemPedido.Quantidade; index++) {
    ItemPedido.Id = index;
    const itemPedidoWithId = Object.assign({}, ItemPedido); 
    ItemPedidos.push(itemPedidoWithId);
    debugger;
    totalPrecoPedidos += ItemPedido.Item.Preco;
  }
  return (dispatch) => {
    dispatch({ type: ATUALIZA_VALOR_PARCIAL_COMANDA, payload: totalPrecoPedidos });
    dispatch({ type: REGISTRA_PEDIDO_COMANDA, payload: ItemPedidos });
  };
};

export const pedidosConfirmadosFetch = (ComandaId) => {
  return (dispatch) => {
    axios.get(`https://me-server.herokuapp.com/comanda/${ComandaId}`)
    .then(response => {
      const item = [];
      let totalComanda = 0;
      response.data.forEach(ItemPedidos => {
        ItemPedidos.Item.forEach(value => {
          item.push(value);
          totalComanda += value.Preco;
        });
      });
      dispatch({ type: ATUALIZA_VALOR_TOTAL_COMANDA, payload: totalComanda });
      dispatch({ type: PEDIDOS_CONFIRMADOS_FETCH_SUCCESS, payload: item });
    });
  };
};

export const postPedido = (comanda) => {
  const pedidosNaoConfirmadosId = [];
  comanda.pedidosNaoConfirmados.forEach(value => {
    pedidosNaoConfirmadosId.push({ 'Item': value.Item, 'Obs': value.Obs });
  });
  return (dispatch) => {
    axios.post('https://me-server.herokuapp.com/pedidos/novo', {
      IdComanda: comanda.comanda.Id,
      ItemPedidos: pedidosNaoConfirmadosId
    })
    .then(response => atualizaPedidosConfirmados(dispatch, response))
    .catch((error) => {
      //console.log(error);
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

export const removeItem = (ItemPedido) => {
  return {
    type: REMOVE_ITEM_FROM_PEDIDOS_NAO_CONFIRMADOS,
    payload: ItemPedido
  };
};
