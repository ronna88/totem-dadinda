import React from 'react'
import {useNavigate} from 'react-router-dom';

function Concluido() {
    const navigate = useNavigate();


    setTimeout(() => {
        navigate("/");
    }, 7000);

  return (
    <div><h2>PAGAMENTO CONCLUÍDO</h2></div>
  )
}

export default Concluido