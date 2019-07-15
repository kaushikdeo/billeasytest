import { FETCH_STORES_DATA_START, FETCH_STORES_DATA_SUCESS, FETCH_STORES_DATA_FAILURE } from './actionConstants';

export default function fetchStoresData() {
  return function (dispatch) {
    dispatch({
      type: FETCH_STORES_DATA_START
    });
    fetch('https://api.myjson.com/bins/em6vy')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_STORES_DATA_SUCESS,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_STORES_DATA_FAILURE,
          payload: error,
        });
      });
  }
};