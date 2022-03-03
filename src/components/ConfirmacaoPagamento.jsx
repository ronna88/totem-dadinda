import React, { useEffect, useState } from "react";
import EnviarPagamento from "./EnviarPagamento";
import {buscaIdCliente} from './../api/api';
import { pag } from './../api/api';
import { useNavigate } from 'react-router-dom';

function ConfirmacaoPagamento(param) {
  console.log("confirmacao");  
  const navigate = useNavigate();

  let detalhes ='';
  for(var i = 0 ; i < param.cliente.produtos.length ; i++){
    detalhes += ' ' ;
    detalhes += param.cliente.produtos[i].Nome;
    detalhes += ' ';
    detalhes += param.cliente.produtos[i].Quantidade;
    detalhes += ', ';
  }

  pag(param.cliente.clientId, param.cliente.total, detalhes, a);

  setTimeout(() => {
    if (param.cliente.retorno.id > 0) {
      console.log("entrou if");
      navigate("/concluido");
    } else {
      navigate("/error");
    }
    //console.log(param.cliente.retorno);
  }, 8000);
  
  
  return (
    <div>
      {
        
  //    typeof id === 'undefined' ? <h3>Carregando...</h3> : <EnviarPagamento param={param} id={id} />
      }

    </div>
  );

  function a(retorno){
    param.cliente.retorno = retorno;

    console.log(param.cliente.retorno);
  }
}

export default ConfirmacaoPagamento;
