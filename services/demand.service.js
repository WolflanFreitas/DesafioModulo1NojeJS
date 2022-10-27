import DemandRepository from "../repositories/demand.repository.js"

async function getDemands() {
    return await DemandRepository.getDemands();
}

export default {
    getDemands
}