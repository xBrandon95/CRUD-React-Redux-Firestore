import React from 'react';

export const UpdateProduct = () => {
  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Editar Producto</h2>
            <form>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto*"
                />
              </div>
              <div className="form-group">
                <label>Precio:</label>
                <input
                  name="price"
                  type="number"
                  className="form-control"
                  placeholder="Precio del Producto*"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold btn-block text-uppercase mt-5"
              >
                GUARDAR CAMBIOS
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
