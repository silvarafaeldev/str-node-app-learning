import express from "express";
import router from "./routes/routes.js";
import { createConnection } from "typeorm";

createConnection()
.then(() => {
  console.log("Banco de dados conectado.")
})
.catch(error => console.log(error))

const app = express();
app.use(express.json());

app.use(router);

export default app;
