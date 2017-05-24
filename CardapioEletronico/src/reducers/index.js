import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CardapioReducer from './CardapioReducer';
import ComandaReducer from './ComandaReducer';

export default combineReducers({
  auth: AuthReducer,
  cardapio: CardapioReducer,
  comanda: ComandaReducer
});
