import express from "express";
import DemandRouter from "./routes/demand.routes.js"

const app = express();

global.fileName = "pedidos.json";

app.use(express.json());

app.use("/demand", DemandRouter);

app.listen(3000, () => {
    console.log("API Started on http://localhost:3000/demand")
});