import DemandService from "../services/demand.service.js"

async function getDemands(req, res) {
    try {
        res.send(await DemandService.getDemands());
    } catch (err) {
        res.status(400).send({
            error: err.message
        })
    }
}

export default {
    getDemands
}