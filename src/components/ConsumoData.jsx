import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { bIdCliente } from "../api/api";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import IdleTimer from "react-idle-timer";
import Spinner from './Spinner'

function ConsumoData(param) {
  /*
    param = cartaoConsumo , função aoPagar(cartao, total, produtos)
  */

  console.log("consumodata");
  console.log(param);

  const textInput = React.useRef(null);
  const [msgError, setMsgError] = useState();
  const [cartaoPrePago, setCartaoPrePago] = useState();
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
        timeout={10000}
        onIdle={onIdle}
      />
      {spinner ? <Spinner/> :""}
      <Box display="flex" justifyContent="center" alignItems="center">
        <List>
          {param.cliente.produtos.map((produto) => (
            <div key={produto.Nome}>
              <ListItem disablePadding>
                <ListItemText
                  key={produto.Nome}
                  primary={
                    produto.Nome +
                    " | QTD:  " +
                    produto.Quantidade +
                    " | R$ " +
                    produto.Valor
                  }
                />
              </ListItem>
              <Divider />
            </div>
          ))}

          <h3>{"TOTAL R$ " + param.cliente.total}</h3>
        </List>
      </Box>
      <br />
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSpinner(true);
            bIdCliente(cartaoPrePago)
              .then((res) => {
                setSpinner(false);
                console.log("busca clientId");
                console.log(res.data[0].user_id);
                param.cliente.clientId = res.data[0].user_id;
                navigate("/confirmacao");
              })
              .catch((Error) => {
                setSpinner(false);
                console.log("ERROR02 erro buscacliente");
                setMsgError("CARTÃO NÃO ENCONTRADO");
                textInput.current.value = "";
                //TODO: Implementar mensagem de erro e redirecionar.
              });
          }}
        >
            <h1>Aproxime o cartão Pré Pago</h1>
          <TextField
            id="cartaoPrePago"
            name="cartaoPrePago"
            label="Cartão Pré Pago"
            variant="filled"
            inputRef={textInput}
            error={msgError === "CARTÃO NÃO ENCONTRADO" ? true : false}
            helperText={
              msgError === "CARTÃO NÃO ENCONTRADO"
                ? "CARTÃO NÃO ENCONTRADO"
                : ""
            }
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

export default ConsumoData;
