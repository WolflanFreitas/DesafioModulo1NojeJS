import express from "express";
import DemandController from "../controllers/demand.controller.js";

const router = express.Router();

router.get("/teste", DemandController.getDemands);

export default router;