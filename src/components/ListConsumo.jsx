import React from "react";
import ConsumoData from "./ConsumoData";
import {useNavigate} from 'react-router-dom';

function ListConsumo(param) {

  const navigate = useNavigate();
  /*
    param = número do cartao de consumo, e função para enviar o pagamento.
  */
 console.log(param.cliente.listaConsumo);
 if (param.cliente.listaConsumo === "Comanda não encontrada"){
    setTimeout(() => {
      navigate("/");
    }, 3000);
 }
 //
 
 
  return (
    <div>
        <h4>Lista de Consumo</h4>
        {
          param.cliente.listaConsumo === "Comanda não encontrada" ? "Comanda não encontrada!" : <ConsumoData cliente={param.cliente} receberDados={param.receberDados} />
        }

        {
          //<ConsumoData cliente={param.cliente} receberDados={param.receberDados} />
        }
    </div>
  );

}

export default ListConsumo;
