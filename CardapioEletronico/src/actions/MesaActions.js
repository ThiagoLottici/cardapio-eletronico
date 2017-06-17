import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  MESA_FETCH_SUCCESS,
  ON_MESA_NUM_CHANGE,
  SELECIONA_MESA,
  SELECIONA_MESA_SUCCESS,
  SELECIONA_MESA_FAIL
} from './types';


export const mesasFetch = () => {
  return (dispatch) => {
    axios.get('https://me-server.herokuapp.com/mesas')
    //axios.get('http://192.168.0.7:3000/mesas')
      .then(response => {
        dispatch({ type: MESA_FETCH_SUCCESS, payload: response.data });
      });
  };
};

export const onMesaNumChange = ({ mesaNum }) => {
  return {
      type: ON_MESA_NUM_CHANGE,
      payload: mesaNum
    };
};

export const selecionarMesaPost = (mesaNum) => {
  return (dispatch) => {
    dispatch({ type: SELECIONA_MESA });
    axios.post('https://me-server.herokuapp.com/mesas', {
      //axios.post('http://192.168.0.7:3000/mesas', {
      NumMesa: mesaNum
    })
    .then((response) => {
      //console.log(response);
      selecionaMesaSuccess(dispatch, response);
    })
    .catch((error) => {
      //console.log(error);
      selecionaMesaFail(dispatch, error);
    });
  };
};

const selecionaMesaSuccess = (dispatch, response) => {
  dispatch({
    type: SELECIONA_MESA_SUCCESS,
    payload: response.data
  });

  Actions.main();
};

const selecionaMesaFail = (dispatch, error) => {
  dispatch({
    type: SELECIONA_MESA_FAIL,
    payload: error
  });
};
