import { SET_PRODUK } from "./actionTypes";
const initialState = {
  produks: []
};

const reducer = (state = initialState, action) => {
  if (action.type === SET_PRODUK) {
    return {
      ...state,
      produks: action.payload
    };
  }
  return state;
};
export default reducer;
