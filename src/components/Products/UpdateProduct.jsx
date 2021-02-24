import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {
  hideAlertAction,
  showAlertAction,
} from '../../redux/actions/alertActions';
import { updateProductAction } from '../../redux/actions/productActions';
import { Spinner } from '../Spinner';

export const UpdateProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { updateProduct, loading } = useSelector((state) => state.products);

  const { alert } = useSelector((state) => state.alert);

  const [product, handleInputChange, setProduct] = useForm({
    name: '',
    price: '',
  });

  useEffect(() => {
    if (updateProduct) {
      setProduct(updateProduct);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateProduct]);
  const { name, price } = product;

  const handleSubmitUpdate = (e) => {
    e.preventDefault();

    // validate form
    if (name.trim() === '' || price <= 0 || price === '') {
      const alert = {
        msg: 'Ambos campos son obligatorios',
        class: 'alert alert-danger text-center text-uppercase p3',
      };
      dispatch(showAlertAction(alert));
      return;
    }

    dispatch(hideAlertAction());
    // create new producto
    dispatch(updateProductAction(product));

    setTimeout(() => {
      history.push('/');
    }, 500);
  };

  return (
    <div className="row justify-content-center mt-3">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Editar Producto</h2>
            {alert && <p className={alert.class}>{alert.msg}</p>}
            <form onSubmit={handleSubmitUpdate}>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto*"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Precio:</label>
                <input
                  name="price"
                  type="number"
                  className="form-control"
                  placeholder="Precio del Producto*"
                  value={price}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold btn-block text-uppercase mt-5"
                disabled={loading}
              >
                GUARDAR CAMBIOS
              </button>
              {loading && <Spinner />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
