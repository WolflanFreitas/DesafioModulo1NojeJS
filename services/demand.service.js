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

export default {
    getDemands,
    createDemand,
    updateDemand,
    updateDelivered,
    deleteDemand
}