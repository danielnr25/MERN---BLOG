import express from "express";
import { PORT } from "./config.js";
import indexRoute from "./routes/index.routes.js"
import postRoutes from "./routes/blogs.routes.js"
import cors from 'cors'
const app = express();

/* IMPORTANTE INGRESO DE DATOS CON EL CLIENTE*/
app.use(express.json());

/* CONEXION CON OTROS SERVIDORES */
app.use(cors())

/* ROUTES */
app.use(indexRoute);
app.use(postRoutes);

app.listen(PORT)
console.log(`Server is running on port ${PORT}`)