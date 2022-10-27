import DemandService from "../services/demand.service.js"

async function getDemands(req, res) {
    try {
        res.send(await DemandService.getDemands());
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
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
        });
    }
}

async function updateDemand(req, res) {
    try {
        let demand = req.body;

        if (!demand.id || !demand.cliente || !demand.produto || !demand.valor || demand.entregue == null) {
            throw new Error("Id do pedido, nome do cliente, produto ou valor não presentes no Body da requisição!");
        }

        res.send(await DemandService.updateDemand(demand));
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
}

async function updateDelivered(req, res) {
    try {
        let demand = req.body;

        if (!demand.id || demand.entregue == null) {
            throw new Error("Id do pedido ou status da entrega não presentes no Body da requisição!");
        }

        if (typeof demand.entregue != "boolean") {
            throw new Error("O status do pedido deve ser um valor booleano: TRUE or False!");
        }

        res.send(await DemandService.updateDelivered(demand));
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
}

async function deleteDemand(req, res) {
    try {
        const id = req.params.id;

        if (!id) {
            throw new Error("Id required!");
        }

        res.send(await DemandService.deleteDemand(id));
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
}

async function getDemand(req, res) {
    try {
        const id = req.params.id;

        if (!id) {
            throw new Error("Id required!");
        }

        res.send(await DemandService.getDemand(id));
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
}

async function getTotalPerClient(req, res) {
    try {
        const cliente = req.body.cliente;

        if (!cliente) {
            throw new Error("Name of client required!");
        }

        res.send(await DemandService.getTotalPerClient(cliente));
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
}

async function getTotalPerProduct(req, res) {
    try {
        const produto = req.body.produto;

        if (!produto) {
            throw new Error("Name of product required!");
        }

        res.send(await DemandService.getTotalPerProduct(produto));
    } catch (err) {
        res.status(400).send({
            error: err.message
        });
    }
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