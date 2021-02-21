import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { createProductAction } from '../../redux/actions/productActions';
import { Spinner } from '../Spinner';

export const NewProduct = ({ history }) => {
  const [product, handleInputChange] = useForm({
    name: '',
    price: '',
  });

  const { name, price } = product;

  const dispatch = useDispatch();

  // Access the State
  const { loading } = useSelector((state) => state.products);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate form
    if (name.trim() === '' || Number(price) <= 0) {
      return;
    }
    // create new producto
    dispatch(
      createProductAction({
        name,
        price: Number(price),
        date: new Date(),
      })
    );

    setTimeout(() => {
      history.push('/');
    }, 1000);
  };
  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-6">
        <div className="card p-4">
          <div className="card-body">
            <h2 className="text-center mb-4">Agregar Nuevo Producto</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto*"
                  onChange={handleInputChange}
                  value={name}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label>Precio:</label>
                <input
                  name="price"
                  type="number"
                  className="form-control"
                  placeholder="Precio del Producto*"
                  onChange={handleInputChange}
                  value={price}
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold btn-block text-uppercase mt-4"
                disabled={loading}
              >
                AGREGAR
              </button>

              {loading && <Spinner />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
