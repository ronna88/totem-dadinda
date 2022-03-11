import { TextField } from "@mui/material";
import React, { useState, useRef } from "react";
import { bIdCliente, buscaSaldoPrePago } from "../api/api";
import { useNavigate } from 'react-router-dom';
import IdleTimer from "react-idle-timer";
import Spinner from './Spinner'

function Consulta({ cliente }) {
  const [cartaoPrePago, setCartaoPrePago] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const idleTimerRef = useRef();
  const [spinner, setSpinner] = useState(false);

  const onIdle = () => {
    console.log("Inativo");
    navigate("/");
  }

  return (
    <div>
      <IdleTimer 
        ref={idleTimerRef}
        timeout={7000}
        onIdle={onIdle}
      />
      { spinner ? <Spinner /> : "" }
      <div>
        <h1>Aproxime o cartão Pré Pago</h1>
        <form
          onSubmit={(event) => {
            setSpinner(true);
            event.preventDefault();
            bIdCliente(cartaoPrePago)
              .then((res) => {
                console.log("Busca clientID OK");
                console.log(res.data[0].user_id);
                cliente.cliente.clientId = res.data[0].user_id;
                buscaSaldoPrePago(cliente.cliente.clientId)
                  .then((r) => {
                    setSpinner(false);
                    console.log("Busca Saldo OK");
                    console.log(r.data);
                    cliente.cliente.saldo = r.data;
                    console.log(cliente.cliente.saldo);
                    navigate("/saldo");
                  })
                  .catch((Error) => {
                    setSpinner(false);
                    console.log("Erro na consulta do Saldo");
                  });
              })
              .catch((Error) => {
                setSpinner(false);
                console.log("Erro na busca de clientId");
                setError(true);
              });
          }}
        >
          <TextField
            id="cartaoPrePago"
            name="cartaoPrePago"
            label="Cartão Pré Pago"
            variant="filled"
            autoComplete="false"
            error={error}
            helperText={error ? "Cartão Pré Pago não Encontrado" : ""}
            autoFocus
            sx={{ width: 300,  minHeight: 130 }}
            onChange={(event) => {
              setCartaoPrePago(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Consulta;
