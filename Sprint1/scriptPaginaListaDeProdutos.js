function alterarTexto() {
    var elemento = document.getElementById("statusPedido");
    var texto = elemento.innerHTML;

    if (texto === "Pedido recebido") {
        elemento.innerHTML = "Pedido em separação";
    }
    else if (texto === "Pedido em separação") {
        elemento.innerHTML = "Enviado para a transportadora";
    }
    else if (texto === "Enviado para a transportadora") {
        elemento.innerHTML = "Recebido pela transportadora";
    }
    else if (texto === "Recebido pela transportadora") {
        elemento.innerHTML = "Mercadoria em trânsito";
    }
    else if (texto === "Mercadoria em trânsito") {
        elemento.innerHTML = "Mercadoria em rota de entrega";
    }
    else if (texto === "Mercadoria em rota de entrega") {
        elemento.innerHTML = "Pedido entregue";
    }
}