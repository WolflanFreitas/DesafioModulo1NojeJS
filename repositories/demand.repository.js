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

export default {
    getDemands
}