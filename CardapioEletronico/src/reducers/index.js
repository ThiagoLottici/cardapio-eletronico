import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CardapioReducer from './CardapioReducer';

export default combineReducers({
  auth: AuthReducer,
  cardapio: CardapioReducer
});
