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

async function createDemand(req, res) {
    try {
        let demand = req.body;

        if (!demand.cliente || !demand.produto || !demand.valor) {
            throw new Error("Nome do cliente, produto ou valor não presentes no Body da requisição!");
        }

        res.send(await DemandService.createDemand(demand));
    } catch (err) {
        res.status(400).send({
            error: err.message
        })
    }
}

async function updateDemand(req, res) {
    try {
        let demand = req.body;

        if (!demand.id || !demand.cliente || !demand.produto || !demand.valor || demand.entregue == null) {
            throw new Error("Nome do cliente, produto ou valor não presentes no Body da requisição!");
        }

        res.send(await DemandService.updateDemand(demand));
    } catch (err) {
        res.status(400).send({
            error: err.message
        })
    }
}

export default {
    getDemands,
    createDemand,
    updateDemand
}