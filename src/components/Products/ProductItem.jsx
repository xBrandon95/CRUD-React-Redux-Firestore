import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../../redux/actions/productActions';

export const ProductItem = ({ id, name, price, index }) => {
  const dispatch = useDispatch();

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

  return (
    <tr>
      <th scope="row">{index + 1} </th>
      <td>{name}</td>
      <td>$ {price}</td>
      <td>
        <button type="button" className="btn btn-success mr-4">
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
