import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
  CARDAPIO_FETCH_SUCCESS
} from './types';

export const cardapioFetch = () => {
  return (dispatch) => {
    axios.get('https://cardapioteste.herokuapp.com/')
      .then(response => {
        dispatch({ type: CARDAPIO_FETCH_SUCCESS, payload: response.data });
    });
  };
};

