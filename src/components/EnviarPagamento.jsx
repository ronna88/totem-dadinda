import React, { useState } from "react";
import { pag } from './../api/api';
import { useNavigate } from "react-router-dom";

function EnviarPagamento(param, id) {
  const [retornoPagamento, setRetornoPagamento] = useState();
  const navigate = useNavigate();

  //já recebe o valor correto.
  console.log("enviarPagamento");
  console.log(param.param);
  console.log(param.id.clientId);
 let detalhes ='';
  for(var i = 0 ; i < param.param.produtos.length ; i++){
    detalhes += ' ' ;
    detalhes += param.param.produtos[i].Nome;
    detalhes += ' ';
    detalhes += param.param.produtos[i].Quantidade;
    detalhes += ', ';
  }
  console.log(detalhes);

  //pag(param.id.clientId, param.param.totalConsumido, detalhes, setRetornoPagamento);

  return (
    <div>
      enviar para pagamento
      
    </div>
  );
}

export default EnviarPagamento;
