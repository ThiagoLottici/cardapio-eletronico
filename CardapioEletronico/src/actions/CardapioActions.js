import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {
  CARDAPIO_FETCH_SUCCESS,
  OBSERVATIONS_CHANGED
} from './types';

export const cardapioFetch = () => {
  return (dispatch) => {
    axios.get('http://me-server.herokuapp.com/cardapio')
      //axios.get('http://192.168.0.7:3000/cardapio')
      .then(response => {
        dispatch({ type: CARDAPIO_FETCH_SUCCESS, payload: response.data });
    });
  };
};

export const dishDetails = ({ prop, value }) => {
  return {
    type: OBSERVATIONS_CHANGED,
    payload: { prop, value }
  };
};

