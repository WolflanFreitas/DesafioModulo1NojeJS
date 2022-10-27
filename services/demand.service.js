import DemandRepository from "../repositories/demand.repository.js"

async function getDemands() {
    return await DemandRepository.getDemands();
}

async function createDemand(demand) {
    return await DemandRepository.createDemand(demand);
}

async function updateDemand(demand) {
    return await DemandRepository.updateDemand(demand);
}

async function updateDelivered(demand) {
    return await DemandRepository.updateDelivered(demand);
}

async function deleteDemand(id) {
    return await DemandRepository.deleteDemand(id);
}

async function getDemand(id) {
    return await DemandRepository.getDemand(id);
}

async function getTotalPerClient(cliente) {
    const pedidos = await DemandRepository.getDemandsPerClient(cliente);
    const pedidosEntregues = pedidos.filter(demand => demand.entregue === true);

    const valorInicial = 0;
    const totalDosPedidosDoCliente = pedidosEntregues.reduce((acumulador, current) =>
        acumulador + current.valor, valorInicial
    );
    // let total = 0;
    // pedidosEntregues.forEach(element => {
    //     total += element.valor;
    // });
    // console.log(total);
    // return "" + parseFloat(total);
    return totalDosPedidosDoCliente.toFixed(2);
}

async function getTotalPerProduct(product) {
    const pedidos = await DemandRepository.getDemandsPerProduct(product);
    const pedidosEntregues = pedidos.filter(demand => demand.entregue === true);

    const valorInicial = 0;
    const totalDosPedidosDoProduto = pedidosEntregues.reduce((acumulador, current) =>
        acumulador + current.valor, valorInicial
    );
    // let total = 0;
    // pedidosEntregues.forEach(element => {
    //     total += element.valor;
    // });
    // console.log(total);
    // return "" + parseFloat(total);
    return totalDosPedidosDoProduto.toFixed(2);
}

export default {
    getDemands,
    createDemand,
    updateDemand,
    updateDelivered,
    deleteDemand,
    getDemand,
    getTotalPerClient,
    getTotalPerProduct
}