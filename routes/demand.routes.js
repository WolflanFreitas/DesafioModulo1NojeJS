import express from "express";
import DemandController from "../controllers/demand.controller.js";

const router = express.Router();

router.get("/", DemandController.getDemands);
router.post("/", DemandController.createDemand);
router.put("/", DemandController.updateDemand);
router.patch("/", DemandController.updateDelivered);
router.delete("/:id", DemandController.deleteDemand);
router.get("/:id", DemandController.getDemand);
router.post("/total", DemandController.getTotalPerClient);

export default router;