import {
    promises as fs
} from "fs";

const {
    readFile,
    writeFile
} = fs;

async function getDemands() {
    const persistentData = JSON.parse(await readFile(global.fileName));
    return persistentData.pedidos;
}

async function createDemand(demand) {
    const persistentData = JSON.parse(await readFile(global.fileName));

    demand = {
        id: persistentData.nextId++,
        cliente: demand.cliente,
        produto: demand.produto,
        valor: demand.valor,
        entregue: false,
        timestamp: new Date()
    }

    persistentData.pedidos.push(demand);

    await writeFile(global.fileName, JSON.stringify(persistentData, null, 2));

    return demand;
}

async function updateDemand(demand) {
    const persistentData = JSON.parse(await readFile(global.fileName));
    const index = persistentData.pedidos.findIndex(a => a.id === demand.id);

    if (index === -1) {
        throw new Error("Pedido não encontrado!");
    }
    persistentData.pedidos[index].cliente = demand.cliente;
    persistentData.pedidos[index].produto = demand.produto;
    persistentData.pedidos[index].valor = demand.valor;
    persistentData.pedidos[index].entregue = demand.entregue;

    await writeFile(global.fileName, JSON.stringify(persistentData, null, 2));

    return persistentData.pedidos[index];
}

async function updateDelivered(demand) {
    const persistentData = JSON.parse(await readFile(global.fileName));
    const index = persistentData.pedidos.findIndex(a => a.id === demand.id);

    if (index === -1) {
        throw new Error("Pedido não encontrado!");
    }

    persistentData.pedidos[index].entregue = demand.entregue;

    await writeFile(global.fileName, JSON.stringify(persistentData, null, 2));

    return persistentData.pedidos[index];
}

async function deleteDemand(id) {

    const persistentData = JSON.parse(await readFile(global.fileName));

    const index = persistentData.pedidos.findIndex(a => a.id === parseInt(id));

    if (index === -1) {
        throw new Error("Pedido não encontrado!");
    }

    persistentData.pedidos = persistentData.pedidos.filter(demand => demand.id !== parseInt(id));
    await writeFile(global.fileName, JSON.stringify(persistentData, null, 2));

    return "Pedido excluído com sucesso";
}

async function getDemand(id) {
    const persistentData = JSON.parse(await readFile(global.fileName));

    const index = persistentData.pedidos.findIndex(a => a.id === parseInt(id));

    if (index === -1) {
        throw new Error("Pedido não encontrado!");
    }

    return persistentData.pedidos[index];
}

async function getDemandsPerClient(cliente) {
    const persistentData = JSON.parse(await readFile(global.fileName));

    const index = persistentData.pedidos.findIndex(a => a.cliente === cliente);

    if (index === -1) {
        throw new Error("Cliente não encontrado!");
    }

    persistentData.pedidos = persistentData.pedidos.filter(demand => demand.cliente === cliente);

    return persistentData.pedidos;
}

export default {
    getDemands,
    createDemand,
    updateDemand,
    updateDelivered,
    deleteDemand,
    getDemand,
    getDemandsPerClient
}