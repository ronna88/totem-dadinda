import React from 'react'
import {useNavigate} from 'react-router-dom';

function Error() {
    const navigate = useNavigate();


    setTimeout(() => {
        navigate("/");
    }, 10000);
  return (
    <div>
        <h2>PAGAMENTO NÃO CONCLUÍDO</h2>
        <h3>FAVOR DIRIJA-SE AO CAIXA</h3>
    </div>
  )
}

export default Error