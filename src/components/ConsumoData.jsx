import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { buscaConsumoCliente } from "../api/api";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ConsumoData( param ) {
  /*
    param = cartaoConsumo , função aoPagar(cartao, total, produtos)
  */

    console.log("consumodata");
    console.log(param.cliente);

  const listaConsumo = param.cliente.listaConsumo;

  const [cartaoPrePago, setCartaoPrePago] = useState();
  const navigate = useNavigate();

  useEffect(() => {
   //buscaConsumoCliente(param.cliente.cartaoConsumo, setListaConsumo);
  }, [param]);

  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center">
          {
          // param.cliente.listaConsumo.message === "Comanda não encontrada" ? navigate("/") : null
          }
        <List>
          {
          
          listaConsumo.Produtos.map((produto) => (
            <div key={produto.Nome}>
              <ListItem disablePadding>
                <ListItemText key={produto.Nome} primary={produto.Nome + " | QTD:  " + produto.Quantidade + " | R$ " + produto.Valor} />
              </ListItem>
              <Divider />
            </div>
          ))
          
          }

          <h3>{
          "TOTAL R$ " + listaConsumo.TotalConta
          }</h3>
        </List>
      </Box>
      <br />
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            param.receberDados(
              cartaoPrePago,
              listaConsumo.TotalConta,
              listaConsumo.Produtos
            );
            setTimeout(() => {
              navigate("/confirmacao");
            }, 2000);
            
            
          }}
        >
          <TextField
            id="cartaoPrePago"
            name="cartaoPrePago"
            label="Cartão Pré Pago"
            variant="filled"
            autoFocus
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
