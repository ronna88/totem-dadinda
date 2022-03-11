import { Button } from '@mui/material'
import React from 'react'


function Inicio() {
  return (
    <div>
        <div>
            <h2>RESTAURANTE DA DINDA</h2>
        </div>
        <br/><br/>
        <div>
            <Button href="/consulta" 
              variant="contained" 
              color="primary" 
              size='large' 
              sx={{ width: 300,  minHeight: 130 }}>Consultar Saldo</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button href="/pagamento" 
              variant="contained" 
              color="primary" 
              size='large'
              sx={{ width: 300,  minHeight: 130}}>Efetuar Pagamento</Button>
        </div>
    </div>
  )
}

export default Inicio