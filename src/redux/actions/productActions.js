import { db } from '../../firebase/config';
import Swal from 'sweetalert2';
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
} from '../types/index';

export const createProductAction = (product) => {
  return async (dispatch) => {
    dispatch(createProduct());
    try {
      // Insert to DB
      const data = await db.collection('products').add(product);
      product.id = data.id;

      // Update state
      dispatch(createProductSuccess(product));

      // Show message success
      Swal.fire(
        'Producto Agregado',
        'El producto se agrego correctamente',
        'success'
      );
    } catch (error) {
      console.log(error);
      dispatch(createProductError());

      // Show message error
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo',
      });
    }
  };
};

const createProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const createProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const createProductError = () => ({
  type: ADD_PRODUCT_ERROR,
  payload: true,
});

export const getAllProductsAction = () => {
  return async (dispatch) => {
    dispatch(getAllProducts());

    try {
      const data = await db
        .collection('products')
        .orderBy('date', 'desc')
        .get();

      const products = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch(getAllProductsSuccess(products));
    } catch (error) {
      console.log(error);
      getAllProductsError(true);
    }
  };
};

const getAllProducts = () => ({
  type: GET_PRODUCTS,
  payload: true,
});

const getAllProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getAllProductsError = () => ({
  type: GET_PRODUCTS_ERROR,
  payload: true,
});

export const deleteProductAction = (idProduct) => {
  return async (dispatch) => {
    dispatch(deleteProduct(idProduct));
    try {
      await db.collection('products').doc(idProduct).delete();
      Swal.fire('Eliminado', 'El producto se eliminó correctamente', 'success');
      dispatch(deleteProductSuccess());
    } catch (error) {
      console.log(error);
      dispatch(deleteProductError());

      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intenta de nuevo',
      });
    }
  };
};

const deleteProduct = (idProduct) => ({
  type: DELETE_PRODUCT,
  payload: idProduct,
});

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true,
});
