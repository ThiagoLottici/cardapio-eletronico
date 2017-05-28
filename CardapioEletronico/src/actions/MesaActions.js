import {
  MESA_FETCH_SUCCESS,
  ON_MESA_NUM_CHANGE
} from './types';
import axios from 'axios';

export const mesasFetch = () => {
  return (dispatch) => {
    axios.get('https://me-server.herokuapp.com/mesas')
      .then(response => {
        dispatch({ type: MESA_FETCH_SUCCESS, payload: response.data });
      });
  };
};

export const onMesaNumChange = (mesaNum) => {
  return {
      type: ON_MESA_NUM_CHANGE,
      payload: mesaNum
    };
};

export const selecionarMesaPost = (mesaNum) => {
  return (dispatch) => {
    axios.post('https://me-server.herokuapp.com/mesas', {
      NumMesa: mesaNum,
      IsLivre: false
    })
    .then( (response) => {
      console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    });
  };
};
