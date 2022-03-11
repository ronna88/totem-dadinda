export default class Cliente {
    constructor(){
        this.cliente = {
            cartaoConsumo: "",
            cartaoPrePago: "",
            produtos: [],
            total: 0,
            saldo: 0
        };
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