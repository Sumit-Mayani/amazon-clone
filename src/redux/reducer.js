import * as types from "./actionTypes";

const initialState = {
  loading: false,
  basket: [],
  user: null,
  error: null,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login && Register && Logout Start
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };

    // Login && Register && Logout Success
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };

    // Set User
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    // Basket Empty
    case types.SET_BASKET_EMPLTY:
      return {
        ...state,
        basket: [],
      };

    // Login && Register && Logout Fail
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Add To Cart
    case types.ADD_TO_CART:
      const newBasket = [...state.basket, action.payload];
      return {
        ...state,
        basket: newBasket,
      };

    // Remove From Basket
    case types.REMOVE_FROM_BASKET:
      let updateBaskets = [...state.basket];
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      if (index >= 0) {
        updateBaskets.splice(index, 1);
      }
      return {
        ...state,
        basket: updateBaskets,
      };
    default:
      return state;
  }
};

export default basketReducer;
