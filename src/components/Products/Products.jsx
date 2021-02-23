import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../../redux/actions/productActions';
import { Spinner } from '../Spinner';
import { ProductItem } from './ProductItem';

export const Products = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center mb-4">Lista de Productos</h2>

          {error && <p className="alert alert-danger">Hubo un Error</p>}

          {loading ? (
            <Spinner />
          ) : (
            <table className="table  table-hover">
              <thead className="bg-primary table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="4">
                      <h4 className="font-weight-bold alert alert-light text-center">
                        No hay productos, agrega uno :D
                      </h4>
                    </td>
                  </tr>
                ) : (
                  products.map((product, index) => (
                    <ProductItem
                      key={product.id}
                      index={index}
                      product={product}
                    />
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
