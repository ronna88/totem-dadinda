import axios from "axios";

//busca o id de cliente WP
export const bIdCliente = async (cartao) => {
  const url =
    "https://dadindarestaurante.com.br/backend/index.php?cartao=" + cartao;
  return axios.get(url);
}

//buscar consumo da comanda Catedral
export const bConsumo = async (comanda, cliente) => {
  return axios
  .get(
    "http://25.45.12.30:50101/CatedralMobile/Conta/" +
      comanda +
      "?nomeAparelho=AcessoCantina&operacao=" +
      comanda,
    {
      headers: {
        versaoApp: "1.0.0.0",
        appName: "CATEDRALCANTINA",
        requesterId: "6b487a3722f6a893aaa6",
        Authorization: "Basic QjE6QjE=",
      },
    }
  );
}

//Realiza o bloqueio da comanda para não ser mais usada
export const bloqueioComanda = async (comanda) => {
 
  return axios
  .post("http://25.45.12.30:50101/CatedralMobile/Conta/" + comanda +
      "?nomeAparelho=AcessoCantina&operacao=" + comanda,  {"Fechar": true},
    {
      headers: {
        versaoApp: "1.0.0.0",
        appName: "CATEDRALCANTINA",
        requesterId: "6b487a3722f6a893aaa6",
        Authorization: "Basic QjE6QjE=",
      },
    }
  );
};


export const buscaSaldoPrePago = async ( 
  clientId
 ) => {
   console.log("início busca de saldo cartão pré pago.");
   console.log(clientId);
   return axios
   .get("https://dadindarestaurante.com.br/wp-json/wc/v2/wallet/balance/"+clientId , {
     auth: {
      username: "ck_1545cc324ff07db3a27ca98a21fb981e20d08585",
      password: "cs_ace61e5c22a7ff2cd0ca0c6829b30aafb1149a0e",
     }
   })
 }


 export const pagamentoComandaComPrePago = async (
   clientId, totalConsumido, detalhes
 ) => {
   console.log("início do pagamento do consumo com cartão pré pago");

   const data = {
    type: "debit",
    amount: parseFloat(totalConsumido),
    details: detalhes,
   }

   const url =
    "https://dadindarestaurante.com.br/wp-json/wc/v2/wallet/" + clientId;
  console.log(url);

  return axios
    .post(url, data, {
      auth: {
        username: "ck_1545cc324ff07db3a27ca98a21fb981e20d08585",
        password: "cs_ace61e5c22a7ff2cd0ca0c6829b30aafb1149a0e",
      },
    });
 }



export const efetuaPagamento = async (
  clientId,
  totalConsumido,
  detalhes,
  setDado
) => {
  console.log("inicio efetuar pagamento");
  console.log(clientId);
  console.log(totalConsumido);
  console.log(detalhes);

  /*
    {
        "type": "debit",
        "amount": 8.00,
        "details": "TESTE00"
    }
  */
  const data = {
    type: "debit",
    amount: parseFloat(totalConsumido),
    details: detalhes,
  };

  const url =
    "https://localhost.com.br/wp-json/wc/v2/wallet/" + clientId;
  console.log(url);

  console.log(JSON.stringify(data));

  const resposta = await axios
    .post(url, data, {
      auth: {
        username: "#",
        password: "#",
      },
    })
    .then((resposta) => {
      setDado(resposta.data);
      console.log(resposta.data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
