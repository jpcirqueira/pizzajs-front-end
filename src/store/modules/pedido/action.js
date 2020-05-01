//ACTIONS PIZZA

export function AdicionarPizzaProcess(pizza) {
    return {
        type: 'ADD_PIZZA_PROCESS',
        payload: { pizza }
    }
}

export function AdicionarPizza(pizza) {
    return {
        type: 'ADD_PIZZA',
        payload: { pizza }
    }
}

export function RemoverPizza(id) {
    return {
        type: 'REMOVE_PIZZA',
        payload: { id }
    }
}


//ACTIONS BEBIDA

export function AdicionarBebidaProcess(bebida) {
    return {
        type: 'ADD_BEBIDA_PROCESS',
        payload: { bebida }
    }
}

export function AdicionarBebida(bebida) {
    return {
        type: 'ADD_BEBIDA',
        payload: { bebida }
    }
}

export function RemoverBebida(id) {
    return {
        type: 'REMOVE_BEBIDA',
        payload: { id }
    }
}

//ACTIONS PEDIDO

export function finalizarPedido() {
    return {
        type: 'FINALIZAR_PEDIDO'
    }
}

export function cancelarPedido(id) {
    return {
        type: 'CANCELAR_PEDIDO',
        payload: { id }
    }
}