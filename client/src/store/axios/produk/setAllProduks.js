import { SET_PRODUK } from "../../actionTypes";
import axios from "../../../axios";

export const setAllProduks = () => {
  return dispatch => {
    axios
      .get(`/produk`)
      .then(res => {
        const { produk } = res.data;
        // console.log(data);
        // console.log(res.data.data);
        dispatch({
          type: SET_PRODUK,
          payload: produk
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
