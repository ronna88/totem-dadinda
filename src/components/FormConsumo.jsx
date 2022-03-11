import React from "react";
import { useState, useRef } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { bConsumo } from "./../api/api";
import IdleTimer from "react-idle-timer";
import Spinner from './Spinner';

function FormConsumo({ aoEnviar }, { cliente }) {

  const [cartaoConsumo, setCartaoConsumo] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const idleTimerRef = useRef();
  const [spinner, setSpinner] = useState(false);

  const onIdle = () => {
    console.log("Inativo");
    navigate("/");
  }

  return (
    <div>
      <h1>Aproxime seu cartão de consumo</h1>
      <IdleTimer
        ref={idleTimerRef}
        timeout={10000}
        onIdle={onIdle}
      />
      {spinner ? <Spinner/> : ""}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSpinner(true);
          bConsumo(cartaoConsumo)
            .then((res) => {
              setSpinner(false);
              console.log("Busca de cartão consumo OK");
              aoEnviar(cartaoConsumo, res.data.Produtos, res.data.TotalConta);
              navigate("/consumo/");
            })
            .catch((Error) => {
              setSpinner(false);
              console.log("Erro")
              setError(true);
              //setTimeout(() => {
              //  navigate("/");
              //}, 5000);
            });
        }}
      >
        <TextField
          id="cartaoConsumo"
          name="cartaoConsumo"
          label="Cartão de Consumo"
          variant="filled"
          autoComplete="false"
          error={error}
          helperText={error ? "Cartão de Consumo não Encontrado" : ""}
          autoFocus
          sx={{ width: 300,  minHeight: 200 }}
          onChange={(event) => {
            setCartaoConsumo(event.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default FormConsumo;
