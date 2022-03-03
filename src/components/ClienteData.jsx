import React, { useState, useEffect } from 'react';
import { buscaIdCliente } from '../api/api';

function ClienteData(param) {
    const [clientId, setClientId] = useState();

    useEffect(() => {
      buscaIdCliente(param.cartao,setClientId);
    }, [param]);
    
  return (
    <div>
      <div>{clientId}</div>
    </div>
  );
}

export default ClienteData;
