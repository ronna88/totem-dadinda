import axios from "axios";

export const buscaIdCliente = async (cartao, cliente) => {
  console.log("inicio da busca cliente");
  console.log(cartao);

  const url =
    "https://localhost.com.br/backend/index.php?cartao=" + cartao;
  const resposta = await axios.get(url);

  //resposta.data[0].user_id ID DO CLIENTE DENTRO DO WOOCOMMERCE
  console.log(resposta.data[0].user_id);
  cliente.cliente.clientId = resposta.data[0].user_id;

  console.log("final da busca cliente");
};

export const buscaConsumoCliente = async (comanda, cliente) => {
  console.log("inicio busca consumo cliente");

  const resposta = await axios
    .get(
      "http://25.45.12.30:50101/CatedralMobile/Conta/" +
        comanda +
        "?nomeAparelho=AcessoCantina&operacao=" +
        comanda,
      {
        headers: {
          versaoApp: "1.0.0.0",
          appName: "CATEDRALCANTINA",
          requesterId: "#",
          Authorization: "#",
        },
      }
    )
    .then((resposta) => {
      console.log(resposta.data);
      //setDado(resposta.data);
      cliente.listaConsumo = resposta.data;
    })
    .catch((error) => {
      console.log(error.message);
      //setDado("Comanda não encontrada");
      cliente.listaConsumo = "Comanda não encontrada";
    });

  console.log("final da busca consumo cliente");
};

export const bloqueioComanda = async (comanda) => {
  //http://localhost:50101/CatedralMobile/Conta/100?nomeAparelho=AcessoCantina&operacao=100
  const resposta = await axios.post(
    "http://25.45.12.30:50101/CatedralMobile/Conta/" +
      comanda +
      "?nomeAparelho=AcessoCantina&operacao=" +
      comanda,
    {
      headers: {
        versaoApp: "1.0.0.0",
        appName: "CATEDRALCANTINA",
        requesterId: "#",
        Authorization: "#",
      },
    }
  );
};

export const pag = async (
  clientId, totalConsumido, detalhes, retorno
) => {
  console.log("inicio efetuar pagamento");
  console.log(clientId);
  console.log(totalConsumido);
  console.log(detalhes);

  const data = {
    type: "debit",
    amount: parseFloat(totalConsumido),
    details: detalhes,
  };

  const url =
    "https://localhost.com.br/wp-json/wc/v2/wallet/" + clientId;
  console.log(url);

  const resposta = await axios
    .post(url, data, {
      auth: {
        username: "#",
        password: "#",
      },
    })
    .then((resposta) => {
      retorno(resposta.data);
      console.log(resposta.data);

      
    })
    

  console.log("fim efetuar pagamento");
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
