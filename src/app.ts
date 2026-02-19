import express from "express";
import userRoutes from "./modules/user/user.routes.js";
import arenaRoutes from "./modules/arena/arena.routes.js";

export const app = express();

app.use(express.json());

app.get('/',(req,res) => {
  res.send("Server is running");
})

app.use('/users',userRoutes);
app.use('/arena',arenaRoutes);