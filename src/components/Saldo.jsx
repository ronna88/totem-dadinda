import React from "react";
import { useNavigate } from "react-router-dom";

function Saldo({ cliente }) {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 7000);

  return (
    <div>
      <h2>Saldo</h2>

      <div>
        <h3>R$ {cliente.cliente.saldo.replace(".", ",")}</h3>
      </div>
    </div>
  );
}

export default Saldo;
