import { SET_PRODUK } from "./actionTypes";
import axios from "../axios";

export const setAllProduks = () => {
  return dispatch => {
    axios
      .get(`/produk`)
      .then(res => {
        const { data } = res.data;
        dispatch({
          type: SET_PRODUK,
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
