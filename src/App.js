import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FormConsumo from "./components/FormConsumo";
import FormConsulta from "./components/FormConsulta";
import ListConsumo from "./components/ListConsumo";
import ConfirmacaoPagamento from "./components/ConfirmacaoPagamento";
import Concluido from "./components/Concluido";
import Error from "./components/Error";


import Cliente from './dados/Cliente';
import Inicio from "./components/Inicio";
import Saldo from "./components/Saldo";

function App() {

  const cliente = new Cliente();
  
  return (
    <BrowserRouter >
      <div className="App">
        <h2>Checkout</h2>
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/pagamento" element={<FormConsumo aoEnviar={salvaCartaoConsumo} cliente={cliente}/>} />
          <Route path="/consulta" element={<FormConsulta cliente={cliente}/>}/>
          <Route path="/saldo" element={<Saldo cliente={cliente}/> }/>
          <Route
            path="/consumo"
            element={<ListConsumo cliente={cliente}  />}
          />
          <Route path="/confirmacao" element={<ConfirmacaoPagamento 
            cliente={cliente.cliente} />} />
            <Route path="/concluido" element={<Concluido />} />
            <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );


  function salvaCartaoConsumo(cartao, produtos, total){
    cliente.adicionarCartaoConsumo(cartao);
    cliente.adicionarProdutos(produtos);
    cliente.adicionarValorTotal(total);
    console.log(cliente);
    //buscaConsumoCliente(cartao, cliente);
  }

}

export default App;
