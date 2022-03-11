import React from "react";
import ConsumoData from "./ConsumoData";

function ListConsumo(param) {

  return (
    <div>
        <h4>Lista de Consumo</h4>
        {
          <ConsumoData cliente={param.cliente.cliente} />
        }

    </div>
  );

}

export default ListConsumo;
