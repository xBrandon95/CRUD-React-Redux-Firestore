export const ProductItem = ({ name, price, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1} </th>
      <th>{name}</th>
      <td>$ {price}</td>
      <td>
        <button type="button" className="btn btn-success mr-4">
          Editar
        </button>
        <button type="button" className="btn btn-danger">
          Eliminar
        </button>
      </td>
    </tr>
  );
};
