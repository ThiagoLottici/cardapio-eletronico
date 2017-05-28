import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CardapioReducer from './CardapioReducer';
import ComandaReducer from './ComandaReducer';
import MesaReducer from './MesaReducer';

export default combineReducers({
  auth: AuthReducer,
  cardapio: CardapioReducer,
  comanda: ComandaReducer,
  mesas: MesaReducer
});
