import React from "react";
import { connect } from "react-redux";
import {
  ADD_TO_CART,
  COUNT_CART_TOTALS,
  UPDATE_LOCAL_STORAGE,
} from "../actions/cartactions";

const ProductItem = ({ img, price, name, addToCart, updateLocalStorage }) => {
  return (
    <div className="p-box">
      <img src={img} alt={name} />
      <p>{name}</p>
      <a href="" className="price">
        ${price}
      </a>
      <button className="buy-btn" onClick={() => addToCart()}>
        Add To Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, price, amount, name, img } = ownProps;
  return {
    addToCart: () =>
      dispatch({
        type: ADD_TO_CART,
        payload: {
          id,
          price,
          img,
          amount,
          name,
        },
      }),

    updateLocalStorage: () => {
      dispatch({
        type: UPDATE_LOCAL_STORAGE,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
