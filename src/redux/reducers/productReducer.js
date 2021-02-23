import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  GET_PRODUCT_UPDATE,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
} from '../types/index';

const initialState = {
  products: [],
  error: null,
  loading: false,
  removeProductId: null,
  updateProduct: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
    case GET_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [action.payload, ...state.products],
        loading: false,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        removeProductId: action.payload,
      };

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.removeProductId
        ),
        removeProductId: null,
      };

    case GET_PRODUCT_UPDATE:
      return {
        ...state,
        updateProduct: action.payload,
      };

    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
        loading: false,
        updateProduct: null,
      };

    case UPDATE_PRODUCT_ERROR:
    case DELETE_PRODUCT_ERROR:
    case GET_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
