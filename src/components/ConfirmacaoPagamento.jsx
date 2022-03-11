import React, { useState } from "react";
import { pagamentoComandaComPrePago, bloqueioComanda } from './../api/api';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

function ConfirmacaoPagamento(param) {
  console.log("confirmacao");
  console.log(param);  
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState();
  const [spinner, setSpinner] = useState(true);

  let detalhes ='';
  for(var i = 0 ; i < param.cliente.produtos.length ; i++){
    detalhes += ' ' ;
    detalhes += param.cliente.produtos[i].Nome;
    detalhes += ' ';
    detalhes += param.cliente.produtos[i].Quantidade;
    detalhes += ', ';
  }

  pagamentoComandaComPrePago(param.cliente.clientId, param.cliente.total, detalhes)
  .then((res) => {
    console.log(res.data.id);
    if (res.data.id === false) {
      console.log("SALDO INSUFICIENTE");
     // setMsgError("SALDO INSUFICIENTE");
      navigate("/error");
    } else {
      console.log("PAGAMENTO OK");
      console.log(res);
      bloqueioComanda(param.cliente.cartaoConsumo)
      .then((res) => {
        setSpinner(false);
        console.log("comanda bloqueada");
        navigate("/concluido");
      })
      .catch(Error => {
        setSpinner(false);
        console.log("Erro no bloqueio da comanda");
      })
      
    }
  })
  .catch(Error => {
    setSpinner(false);
    console.log("ERRO NO PAGAMENTO");
  });

  return (
    <div>
      <div>
      {
        spinner ? <Spinner/> : ""
      }
      </div>
      
      {
        msgError === "SALDO INSUFICIENTE" ? <h2>SALDO INSUFICIENTE</h2> : "" 
      }
    </div>
  );
}
export default ConfirmacaoPagamento;