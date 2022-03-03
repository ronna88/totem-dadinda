import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import {useNavigate } from 'react-router-dom';

import { buscaIdCliente, buscaConsumoCliente } from "./../api/api";

function FormConsumo({aoEnviar}, {cliente}) {
    const [cartaoConsumo, setCartaoConsumo] = useState();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

  return (
    <div>
      <h3>Aproxime seu cartão de consumo</h3>
      {loading ? "carregando..." : ""}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          
          aoEnviar(cartaoConsumo);
           setTimeout(() => {
            navigate("/consumo/");
          }, 2000);
            
        }}
      >
        <TextField
          id="cartaoConsumo"
          name="cartaoConsumo"
          label="Cartão de Consumo"
          variant="filled"
          
          autoFocus
          onChange={
              (event) => {
                  setCartaoConsumo(event.target.value);
              }
          }
        />
      </form>
    </div>
  );
}

export default FormConsumo;
