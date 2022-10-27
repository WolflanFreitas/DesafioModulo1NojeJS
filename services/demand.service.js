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

export default {
    getDemands,
    createDemand,
    updateDemand
}