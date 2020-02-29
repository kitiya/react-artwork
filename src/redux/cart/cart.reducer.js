import { CartActionTypes } from "./cart.types";

const INIIIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INIIIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
