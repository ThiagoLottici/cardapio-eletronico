import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
  REGISTRA_PEDIDO_COMANDA
} from './types';

export const registrarPratoComanda = (prato) => {
  return {
    type: REGISTRA_PEDIDO_COMANDA,
    payload: prato
  };
};
