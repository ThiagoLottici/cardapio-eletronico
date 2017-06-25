import { combineReducers } from 'redux';
import PedidosReducer from './PedidosReducer';

export default combineReducers({
  pedidos: PedidosReducer
});
