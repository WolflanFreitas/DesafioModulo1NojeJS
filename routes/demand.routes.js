import express from "express";
import DemandController from "../controllers/demand.controller.js";

const router = express.Router();

router.get("/", DemandController.getDemands);
router.post("/", DemandController.createDemand);

export default router;