import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  deleteProductAction,
  getProductUpdate,
} from '../../redux/actions/productActions';

export const ProductItem = ({ product, index }) => {
  const { id, name, price } = product;

  const dispatch = useDispatch();
  const history = useHistory();

  const deleteProduct = (id) => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Un producto eliminado no se puede recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3498db',
      cancelButtonColor: '#e74c3c',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAction(id));
      }
    });
  };

  const redirectUpdate = (product) => {
    history.push(`/productos/editar/${product.id}`);
    dispatch(getProductUpdate(product));
  };

  return (
    <tr>
      <th scope="row">{index + 1} </th>
      <td>{name}</td>
      <td>$ {price}</td>
      <td>
        <button
          type="button"
          className="btn btn-success mr-4"
          onClick={() => redirectUpdate(product)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteProduct(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
