export default class Cliente {
    constructor(){
        this.cliente = {};
    }
    
    adicionarCartaoConsumo(cartaoConsumo){
        //console.log(cartaoConsumo);
        this.cliente.cartaoConsumo = cartaoConsumo;
    }

    adicionarCartaoPrePago(cartaoPrePago){
        this.cliente.cartaoPrePago = cartaoPrePago;
    }

    adicionarProdutos(produtos){
        this.cliente.produtos = produtos;
    }

    adicionarValorTotal(total){
        this.cliente.total = total;
    }
}