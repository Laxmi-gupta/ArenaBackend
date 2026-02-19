import express from "express";
import userRoutes from "./modules/user/user.routes.js";

export const app = express();

app.use(express.json());

app.get('/',(req,res) => {
  res.send("Server is running");
})

app.use('/users',userRoutes);