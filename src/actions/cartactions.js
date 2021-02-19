export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const GET_TOTALS = "GET_TOTALS";
export const GET_AMOUNT = "GET_AMOUNT";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE = "REMOVE";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const ADD_TO_CART = "ADD_TO_CART";
export const COUNT_CART_TOTALS = "COUNT_CART_TOTALS";
export const UPDATE_LOCAL_STORAGE = "UPDATE_LOCAL_STORAGE";
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
