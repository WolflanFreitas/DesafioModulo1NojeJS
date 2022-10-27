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

export default {
    getDemands,
    createDemand
}