import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import FormConsumo from "./components/FormConsumo";
import ListConsumo from "./components/ListConsumo";
import ConfirmacaoPagamento from "./components/ConfirmacaoPagamento";
import Concluido from "./components/Concluido";
import Error from "./components/Error";
import { buscaIdCliente, buscaConsumoCliente } from "./api/api";
import Cliente from './dados/Cliente';

function App() {

  const cliente = new Cliente();
 
  const [dados, setDados] = useState(
    [
      {
        cartaoConsumo: '',
        cartaoPrePago: '',
        totalConsumido: 0,
        produtos: [],
        clientId: ''
      }
    ]
  )

 

  return (
    <BrowserRouter>
      <div className="App">
        <h2>Checkout</h2>
        <br />
        <br />
        <Routes>
          <Route path="/" element={<FormConsumo  aoEnviar={salvaCartaoConsumo} cliente={cliente}/>} />
          <Route
            path="/consumo"
            element={<ListConsumo cliente={cliente} receberDados={receberDados} />}
          />
          <Route path="/confirmacao" element={<ConfirmacaoPagamento 
            cliente={cliente.cliente} />} />
            <Route path="/concluido" element={<Concluido />} />
            <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  function salvaCartaoConsumo(cartao){
    cliente.adicionarCartaoConsumo(cartao);
    //console.log(cliente);
    buscaConsumoCliente(cartao, cliente);

   
  }

  //recebe o saldo consumido e o cartaoprepago
  function receberDados(cartao, total, produtos) {

    cliente.adicionarCartaoPrePago(cartao);
    cliente.adicionarValorTotal(total);
    cliente.adicionarProdutos(produtos);
    
    buscaIdCliente(cartao, cliente);
  }
}

export default App;
