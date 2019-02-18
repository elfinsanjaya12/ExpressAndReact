import { SET_PRODUK } from "./actionTypes";
const initialState = {
  produk: []
};

const reducer = (state = initialState, action) => {
  if (action.type === SET_PRODUK) {
    return {
      ...state,
      produk: action.payload
    };
  }
  return state;
};
export default reducer;
