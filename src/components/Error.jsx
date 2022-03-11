import React from 'react'
import {useNavigate} from 'react-router-dom';

function Error() {
    const navigate = useNavigate();


    setTimeout(() => {
        navigate("/");
    }, 7000);
  return (
    <div className='Error'>
        <h2>SALDO INSUFICIENTE</h2>
        <h3>FAVOR DIRIJA-SE AO CAIXA</h3>
    </div>
  )
}

export default Error